// 1: Set the text of the <h1> element

const heading = document.querySelector('h1');
heading.textContent = 'My Awesome List';

// 2: Set the color of the <h1> to a different color

heading.style.color = 'blue';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const descP = document.querySelector('.desc');
descP.innerHTML = `this list is <strong><i>soooo</i></strong> dope`;

// 4: Set the class of the <ul> to 'list'
const ul = document.querySelector('ul');
ul.classList.add('list');

// 5: Create a new list item and add it to the <ul>
const listItem = document.createElement('li');
const input = document.createElement('input');

listItem.appendChild(input);

listItem.appendChild(document.createTextNode(' Read Books'));
ul.appendChild(listItem); 

// 6: Change all <input> elements from text fields to checkboxes
const inputFields = document.querySelectorAll('input');
for (let i = 0; i < inputFields.length; i++) {
  inputFields[i].type = 'checkbox';
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const button = document.createElement('button');
button.textContent = 'Delete';

// const extraDiv = document.querySelectorAll('div')[1];
const extraDiv = document.querySelector('.extra');
extraDiv.appendChild(button);


// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
const container = document.querySelector('.container');
button.addEventListener('click', () => {
    container.removeChild(extraDiv);
});
