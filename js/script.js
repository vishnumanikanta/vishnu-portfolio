let sidebar_navigation = document.getElementById('sidebar_navigation');

let sidebar_navigation_bottom = document.getElementById('sidebar_buttom_menu');

sidebar_navigation_bottom.addEventListener('click', function () {
    if (sidebar_navigation.style.left == "" || sidebar_navigation.style.left == "-100%") {
        sidebar_navigation.style.left = "0"
        document.getElementById('sidebar_menu_icon').classList.add('fa-close');
    }
    else {
        sidebar_navigation.style.left = "-100%"
        document.getElementById('sidebar_menu_icon').classList.remove('fa-close');
    }
})


let global_menu_buttom = document.getElementById('global_menu_button')
let global_navigation = document.getElementById('global_menu_items')
let global_close_buttom = document.getElementById('global_menu_close_button')

global_menu_buttom.addEventListener('click', function () {
    global_navigation.style.left = "0";
})

global_close_buttom.addEventListener('click', function () {
    global_navigation.style.left = "-120%";
})

document.addEventListener('DOMContentLoaded', function() {
    const numRectangles = 5; // Example number of rectangles
    const numSymbols = 5;    // Example number of symbols
    const numTriangles = 5;  // Example number of triangles

    createMovingElements('.rectangle', numRectangles, moveRectangle);
    createMovingElements('.symbol', numSymbols, moveSymbol);
    createMovingElements('.triangle', numTriangles, moveTriangle);
});

function createMovingElements(className, numElements, moveFunction) {
    for (let i = 0; i < numElements; i++) {
        createAndAnimateElement(className, moveFunction);
    }
}

function createAndAnimateElement(className, moveFunction) {
    const container = document.querySelector('.background');
    if (!container) {
        console.error('Container element with class "background" not found');
        return;
    }

    const element = document.createElement('div');
    element.classList.add(className.replace('.', '')); // Remove the dot for class name
    container.appendChild(element);

    const size = Math.random() * 100 + 50; // Random size between 50 and 150px
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    element.style.transform = `translate(${x}px, ${y}px)`;

    moveFunction(element);
}

function moveRectangle(element) {
    const animationDuration = Math.random() * 20 + 10; // Random duration between 10s and 30s
    element.style.animation = `move-rect ${animationDuration}s linear infinite`;

    const delay = Math.random() * animationDuration; // Random delay within animation duration
    element.style.animationDelay = `-${delay}s`;
}

function moveSymbol(element) {
    const animationDuration = Math.random() * 20 + 10; // Random duration between 10s and 30s
    element.style.animation = `move ${animationDuration}s linear infinite`;

    const delay = Math.random() * animationDuration; // Random delay within animation duration
    element.style.animationDelay = `-${delay}s`;
}

function moveTriangle(element) {
    const animationDuration = Math.random() * 15 + 10; // Random duration between 10s and 25s
    element.style.animation = `move-triangle ${animationDuration}s linear infinite`;

    const delay = Math.random() * animationDuration; // Random delay within animation duration
    element.style.animationDelay = `-${delay}s`;
}

function getRandomPosition() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const randomX = Math.floor(Math.random() * width);
    const randomY = Math.floor(Math.random() * height);
    return { x: randomX, y: randomY };
}
