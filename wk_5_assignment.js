// Get elements
const header = document.getElementById('header');
const changeTextBtn = document.getElementById('change-text-btn');
const changeStyleBtn = document.getElementById('change-style-btn');
const addElementBtn = document.getElementById('add-element-btn');
const removeElementBtn = document.getElementById('remove-element-btn');
const elementContainer = document.getElementById('element-container');

// Change text content dynamically
changeTextBtn.addEventListener('click', () => {
    header.textContent = 'New Header Text';
});

// Modify CSS styles via JavaScript
changeStyleBtn.addEventListener('click', () => {
    header.style.color = 'red';
    header.style.fontSize = '36px';
});

// Add an element when a button is clicked
addElementBtn.addEventListener('click', () => {
    const newElement = document.createElement('div');
    newElement.textContent = 'New Element';
    newElement.className = 'new-element';
    elementContainer.appendChild(newElement);
});

// Remove an element when a button is clicked
removeElementBtn.addEventListener('click', () => {
    const elements = elementContainer.children;
    if (elements.length > 0) {
        elementContainer.removeChild(elements[elements.length - 1]);
    }
});