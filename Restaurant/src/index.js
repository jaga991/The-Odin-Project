'use strict';

import './style.css';
import homeContent from './content-module/home';
import menuContent from './content-module/menu';
import contactContent from './content-module/contact';

import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';


const mainContent = document.getElementById('content');
const homeNav = document.getElementById('home-nav');
const menuNav = document.getElementById('menu-nav');
const contactNav = document.getElementById('contact-nav');

document.body.onload = () => {
  mainContent.appendChild(homeContent());
  homeNav.classList.add('navLiSelected');
}

let navLi = [homeNav, menuNav, contactNav];

for (let i = 0; i < navLi.length; i++) {
  navLi[i].addEventListener('click', function (e) {
    console.log("s")
    for (let j = 0; j < navLi.length; j++) {
      navLi[j].classList.remove('navLiSelected')
    }

    e.target.classList.add('navLiSelected');

    while (mainContent.firstChild) {
      mainContent.removeChild(mainContent.firstChild);
    }

    switch (navLi[i]) {
      case homeNav:
        mainContent.appendChild(homeContent());
        break;
      case menuNav:
        mainContent.appendChild(menuContent());
        break;
      case contactNav:
        mainContent.appendChild(contactContent());
        const map = new Map({
          target: 'map',
          layers: [
            new TileLayer({
              source: new OSM()
            })
          ],
          view: new View({
            center: [0, 0],
            zoom: 0
          })
        });
        break;
    }
  })
}

// mainContent.addEventListener('onclick', function (content) {
//   while (mainContent.firstChild) {
//     mainContent.removeChild(mainContent.firstChild);
//   }
//   mainContent.appendChild(content);
//   console.log("event occur");
// })

