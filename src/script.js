'use strict';

const title = document.querySelector('.img--title');
const date = document.querySelector('.img--date');
const birthDate = document.querySelector('.select--date');
const submitBtn = document.querySelector('.submit--date');
const explanation = document.querySelector('.img--explanation');
const img = document.querySelector('.img--image');
const link = document.querySelector('.created--link');
const clickLink = document.querySelector('.click--link');

const api_key = config.NASA_API_KEY;
const url = 'https://api.nasa.gov/planetary/apod?api_key=';

const birthUrl = 'https://apod.nasa.gov/apod/'; //ap230710.html

const fetchData = async function () {
  try {
    const res = await fetch(`${url}${api_key}`);
    const data = await res.json();
    console.log(data);
    displayData(data);
  } catch (err) {
    console.error(err);
  }
};
fetchData();

const displayData = data => {
  title.textContent = data.title;
  date.textContent = data.date;
  img.src = data.hdurl;
  explanation.textContent = data.explanation;
};

const getDate = function (date) {
  let getbirthdate = date
    .split('-')
    .map(first => first)
    .join('')
    .slice(2);
  // link.textContent = `https://apod.nasa.gov/apod/ap${getbirthdate}.html`;

  convertTextToLink(
    'your link',
    `https://apod.nasa.gov/apod/ap${getbirthdate}.html`
  );

  // console.log(getbirthdate);
};

submitBtn.addEventListener('click', function () {
  getDate(birthDate.value);
});

const convertTextToLink = function (text, url) {
  // create an anchor(a) element
  const linkElement = document.createElement('a');

  // set the url
  linkElement.setAttribute('href', url);

  // set display text
  // linkElement.innerHTML = text;

  // append the anchor to desired location
  const anchor = document.getElementById('final--link');
  anchor.appendChild(linkElement);

  // redirect to the link automatically
  window.location.href = url;

  linkElement.innerHTML = '';
};

// remaining tasks -
// rearrange code
// style page
// deploy
// add logo
