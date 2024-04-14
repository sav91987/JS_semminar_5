"use strict";

const parseData = JSON.parse(data);
console.log(parseData);

const divMainEl = document.querySelector("div.main");
const h1El = document.createElement('h1');
h1El.innerHTML = 'Список университетов Казахстана';
divMainEl.parentNode.prepend(h1El);

parseData.forEach((element) => {
  const divEl = document.createElement("div");
  divEl.classList.add("main__class");

  const imgEl = document.createElement("img");
  imgEl.classList.add("main__img");
  imgEl.src =
    "https://img.freepik.com/premium-vector/university-logo_20448-237.jpg?w=740";
  imgEl.alt = "logo.jpg";
  divEl.appendChild(imgEl);

  const nameEl = document.createElement("h2");
  nameEl.innerHTML = element.name;
  divEl.appendChild(nameEl);

  const countryEl = document.createElement("h3");
  countryEl.innerHTML = element.country;
  divEl.appendChild(countryEl);

  const webPagesEl = document.createElement("h3");
  webPagesEl.innerHTML = element.web_pages;
  divEl.appendChild(webPagesEl);

  divMainEl.appendChild(divEl);
});
