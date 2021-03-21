const Tabs = (topics) => {

  const topicsDiv = document.createElement('div');
  topicsDiv.classList.add('topics');
  topics.forEach(topic => {
    const newTopic = document.createElement('div');
    newTopic.classList.add('tab');
    newTopic.textContent = topic;
    topicsDiv.appendChild(newTopic);
  })

  return topicsDiv;
}
import axios from 'axios';
const tabsAppender = (selector) => {

  axios.get("https://lambda-times-api.herokuapp.com/topics")
    .then(res => {
      document.querySelector(selector).appendChild(Tabs(res.data.topics));
    })
    .catch(err => {
      console.log('error in tabAppender');
    })
    
  
}

export { Tabs, tabsAppender }