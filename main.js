const generateBtn = document.getElementById('generate-btn');
const numberPlaceholders = document.querySelectorAll('.number-placeholder');
const previousList = document.getElementById('previous-list');
const themeSwitch = document.getElementById('checkbox');

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

const switchTheme = (e) => {
    if (e.target.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}

themeSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.body.classList.toggle('dark-mode', currentTheme === 'dark');

    if (currentTheme === 'dark') {
        themeSwitch.checked = true;
    }
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
    themeSwitch.checked = true;
    localStorage.setItem('theme', 'dark');
}
