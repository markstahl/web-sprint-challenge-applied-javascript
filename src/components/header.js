const Header = (title, date, temp) => {

  const headerDiv = document.createElement('div');
  const dateSpan = document.createElement('span');
  const titleHeader = document.createElement('h1');
  const tempSpan = document.createElement('span');

  dateSpan.textContent = date;
  titleHeader.textContent = title;
  tempSpan.textContent = temp;

  headerDiv.classList.add('header');
  dateSpan.classList.add('date');
  tempSpan.classList.add('temp');

  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(titleHeader);
  headerDiv.appendChild(tempSpan);

  return headerDiv;
}

const headerAppender = (selector) => {

  const newHeader = Header('Lambda Times', 'March 21, 2021', '60°');
  document.querySelector(selector).appendChild(newHeader);
}

export { Header, headerAppender }