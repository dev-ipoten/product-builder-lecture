const generateBtn = document.getElementById('generate-btn');
const numberPlaceholders = document.querySelectorAll('.number-placeholder');
const previousList = document.getElementById('previous-list');

const generateNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
};

const displayNumbers = (numbers) => {
    numberPlaceholders.forEach((placeholder, index) => {
        placeholder.textContent = numbers[index];
    });
};

const addPreviousNumber = (numbers) => {
    const li = document.createElement('li');
    li.textContent = numbers.join(', ');
    previousList.appendChild(li);
};

generateBtn.addEventListener('click', () => {
    const numbers = generateNumbers();
    displayNumbers(numbers);
    addPreviousNumber(numbers);
});
