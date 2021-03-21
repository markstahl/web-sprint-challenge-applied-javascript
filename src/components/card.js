const Card = (article) => {

  const cardDiv = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgContainDiv = document.createElement('div');
  const authorImg = document.createElement('img');
  const authorName = document.createElement('span');

  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgContainDiv.classList.add('img-container');

  headlineDiv.textContent = article.headline;
  authorImg.src = article.authorPhoto;
  authorName.textContent = `By ${article.authorName}`;

  cardDiv.addEventListener('click', function (event) {
    console.log(headlineDiv.textContent);
  })

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContainDiv);
  imgContainDiv.appendChild(authorImg);
  authorDiv.appendChild(authorName);

  return cardDiv;
}


import axios from 'axios';
const cardAppender = (selector) => {

  axios.get("https://lambda-times-api.herokuapp.com/articles")
    .then(res => {
      console.log(res.data.articles);
      console.log(res.data.articles.javascript)
      Object.keys(res.data.articles).forEach(topic => {
        
        res.data.articles[topic].forEach(entry => {
          document.querySelector(selector).appendChild(Card(entry));
        })
      })
    })
    .catch(err => {
      console.log('Error');
    })
}

export { Card, cardAppender }
