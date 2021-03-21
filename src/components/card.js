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
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
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
