'use strict';

const numbers = [100, 456, 98, 45, 43, 73];

// Render All
const allNumbersList = document.getElementById("all-numbers-list");

const ul = document.createElement("ul");

for( let i = 0; i <numbers.length; i++);
 const li = document.createElement('li');
 li.textContent.Content = allNumbers[i]; 
 ul.appendChild(li);


allNumbers.appendChild(ul);

  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  console.log(evenNumbers); // Log even numbers

  const evenNumbersList = document.getElementById("even-numbers-list");
  const ulEven = document.createElement("ul");

  for (let i = 0; i < evenNumbers.length; i++) {
    const li = document.createElement("li");
    li.textContent = evenNumbers[i];
    ulEven.appendChild(li);
  }

  evenNumbersList.appendChild(ulEven);