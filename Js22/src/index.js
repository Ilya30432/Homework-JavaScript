import $ from "jquery";
import "./index.css";
import image from "./images/forest.jpg";

const picture = document.createElement('img')

picture.setAttribute('src',image)
document.querySelector('body').appendChild(picture)
