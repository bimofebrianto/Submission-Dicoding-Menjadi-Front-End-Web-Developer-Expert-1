import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/styleresponsive.css";

import("../DATA.json").then(({ default: jsonRestoran }) => {
  let datas = jsonRestoran.restaurants;
  console.log(datas);
  let dataList = "";
  datas.forEach(function (data) {
    dataList +=
      /*html */
      `
       <div class="list_item">
            <img class="list_item_thumb" src="${data["pictureId"]}" alt="${data["name"]}" title="${data["name"]}">
            <div class="city">${data["city"]}</div>
            <div class="list_item_content">
            <p class="list_item_rating">
                Rating: <span href="#" class="list_item_rating_value">${data["rating"]}</span>
            </p>
            <h1 class="list_item_title"><a href="#">${data["name"]}</a></h1>
            <div class="list_item_desc">${data["description"].slice(0, 210)}.....</div>
            </div>
      </div>
        `;
  });
  document.querySelector("#tes").innerHTML = dataList;
});

const drawer = document.querySelector("#drawer");
const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");

menu.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

hero.addEventListener("click", function () {
  drawer.classList.remove("open");
});

main.addEventListener("click", function () {
  drawer.classList.remove("open");
});
