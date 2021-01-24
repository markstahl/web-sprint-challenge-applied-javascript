const Header = (title, date, temp) => {
  const heading = document.createElement('div');
  const dateLabel = document.createElement('span');
  const h1 = document.createElement('h1');
  const tempLabel = document.createElement('span');


  heading.classList.add('header');
  dateLabel.classList.add('date');
  tempLabel.classList.add('temp');

  dateLabel.textContent = date;
  h1.textContent = title;
  tempLabel.textContent = temp;


  heading.append(dateLabel);
  heading.append(h1);
  heading.append(tempLabel);
  
  return heading;

}

const headerAppender = (selector) => {
   document.querySelector(selector).append(Header('Lambda Times', 'January 23rd, 2021', '70F'));
}

export { Header, headerAppender }

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //


  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
