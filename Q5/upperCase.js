const personInput = document.getElementById('form');
const output = document.getElementById('name');
const button = document.getElementById('button');

button.addEventListener('click', () => {
  const personName = personInput.value;
  const firstLetter = personName.charAt(0).toUpperCase();
  const restOfName = personName.slice(1).toLowerCase();
  const formattedName = firstLetter + restOfName;
  
  output.textContent = formattedName;
});
