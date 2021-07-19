"use strict";

import data from "../data";
import initialElements from "../builder/initialElements";
import build from "../builder/build";

const displayOnStart = () => {
  const updateNavList = () => {
    const nav = document.getElementById("navDiv")
    //create a filter list based on groups
    //create a sort list based on due first, due last, default: first created 
    const filterList = (filterItemArr) => {
      const unorderedList = build.domElement("ul", "filterList");
      for (let e = 0; e < filterItemArr.length; e++) {
        console.log()
        unorderedList.appendChild(build.domElement("li", false, "listItem", filterItemArr[e]));
      }
      return unorderedList;
    };

    const sortList = (sortItemArr) => {
      const unorderedList = build.domElement("ul", "sortList");
      for (let e = 0; e < sortItemArr.length; e++) {
        unorderedList.appendChild(build.domElement("li", false, "listItem", sortItemArr[e]));
      }

      return unorderedList;
    };
    
    nav.appendChild(filterList(data.getToDoGroupArr()));
    nav.appendChild(sortList(data.sortArr));
  };
  const updateToDosDiv = () => {
    const toDosDiv = document.getElementById("toDosDiv")
    console.log(data.toDoMainArr)
    for (let i = 0; i < data.toDoMainArr.length; i++) {
      toDosDiv.appendChild(build.toDoConstructor(data.toDoMainArr[i]["Test"], data.toDoMainArr[i]["Description"], data.toDoMainArr[i]["Group"], data.toDoMainArr[i]["Due Date"]));
    }
  };

  const body = document.body;
  const mainDiv = initialElements.mainDiv;
  document.body.appendChild(mainDiv);
  updateNavList();
  updateToDosDiv();
};

export default displayOnStart;