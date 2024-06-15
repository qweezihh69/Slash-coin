document.addEventListener('DOMContentLoaded', (event) => {
    let slashCount = 0;
    let autoClickerCount = 0;
    let autoClickerCost = 10; // Початкова вартість автоклікера
    
    const clickButton = document.getElementById('clickButton');
    const clickCount = document.getElementById('clickCount');
    const autoClickers = document.getElementById('autoClickers');
    const buyAutoClickerButton = document.getElementById('buyAutoClicker');
    
    // Функція для оновлення відображення кількості слешів
    function updateSlashCount() {
        clickCount.textContent = `Slashes: ${slashCount}`;
    }
    
    // Функція для оновлення відображення кількості автоклікерів
    function updateAutoClickerCount() {
        autoClickers.textContent = `Auto Clickers: ${autoClickerCount}`;
    }
    
    // Функція для оновлення відображення вартості автоклікеру на кнопці
    function updateAutoClickerCost() {
        buyAutoClickerButton.textContent = `Buy Auto Clicker (Cost: ${autoClickerCost} Slashes)`;
    }
    
    // Подія натискання на основну кнопку
    clickButton.addEventListener('click', () => {
        slashCount++;
        updateSlashCount();
    });
    
    // Подія натискання на кнопку покупки автоклікеру
    buyAutoClickerButton.addEventListener('click', () => {
        if (slashCount >= autoClickerCost) {
            slashCount -= autoClickerCost;
            autoClickerCount++;
            autoClickerCost = Math.floor(autoClickerCost * 1.5); // Збільшення вартості автоклікера
            updateSlashCount();
            updateAutoClickerCount();
            updateAutoClickerCost();
        } else {
            alert('Not enough slashes to buy an auto clicker!');
        }
    });
    
    // Функціональність автоклікера
    setInterval(() => {
        if (autoClickerCount > 0) {
            slashCount += autoClickerCount;
            updateSlashCount();
        }
    }, 1000); // Інтервал можна налаштувати за потребою
    
    // Ініціалізація відображення початкової вартості автоклікера
    updateAutoClickerCost();
});
