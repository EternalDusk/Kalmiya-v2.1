// THIS IS THE FILE THAT HANDLES UI HANDLING/UI INTERACTION

// ----- MENU HANDLING -----
function showMenu(menuId) {
    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => menu.classList.add('hidden'));
    document.getElementById(menuId).classList.remove('hidden');
}

function highlightButton(buttonID) {
    const menuButtons = document.querySelectorAll('.menuButton');
    menuButtons.forEach(menuButton => menuButton.classList.remove('standout'));
    document.getElementById(buttonID).classList.add('standout');
}

document.getElementById('menu1Button').addEventListener('click', () => {
    showMenu('menu1');
    highlightButton('menu1Button');
});

document.getElementById('menu2Button').addEventListener('click', () => {
    showMenu('menu2');
    highlightButton('menu2Button');
});

document.getElementById('menu3Button').addEventListener('click', () => {
    showMenu('menu3');
    highlightButton('menu3Button');
});
// ----- MENU HANDLING END -----

// ----- DROPDOWN HANDLING -----
const customizationSelects = document.querySelectorAll('.customizationSelect');
customizationSelects.forEach(select => handleSelect(select));

function handleSelect(select){
    select.addEventListener("change", updateSelectImage);
    function updateSelectImage() {
        var selectImage =  select.id.slice(0, -6);
        var imageElement = document.getElementById(selectImage + "Image");
        var selectedValue = select.value;
        imageElement.src = "assets/img/" + selectedValue + ".png";
    }
}
// ----- DROPDOWN HANDLING END -----


// ----- FUNCTIONALITY MENU -----
var fovSlider = document.getElementById("fovSlider");
var fovNumbers = document.getElementById("fovSliderNumbers");
fovNumbers.innerHTML = "FOV Slider - " + fovSlider.value;
fovSlider.oninput = function() {
    fovNumbers.innerHTML = "FOV Slider - " + this.value;
}

var fpsSlider = document.getElementById("fpsSlider");
var fpsNumbers = document.getElementById("fpsSliderNumbers");
fpsNumbers.innerHTML = "FPS Slider - " + fpsSlider.value;
fpsSlider.oninput = function() {
    fpsNumbers.innerHTML = "FPS Slider - " + this.value;
}
// ----- FUNCTIONALITY MENU END -----


// ----- PERFORMANCE MENU -----
var drawDistanceScaleSlider = document.getElementById("drawDistanceScaleSlider");
var drawDistanceScaleNumbers = document.getElementById("drawDistanceScaleNumbers");
drawDistanceScaleNumbers.innerHTML = "Draw Distance Scale - " + drawDistanceScaleSlider.value + "x";
drawDistanceScaleSlider.oninput = function() {
    drawDistanceScaleNumbers.innerHTML = "Draw Distance Scale - " + this.value  + "x";
}

var objectLODScaleSlider = document.getElementById("objectLODScaleSlider");
var objectLODScaleNumbers = document.getElementById("objectLODScaleNumbers");
objectLODScaleNumbers.innerHTML = "Object LOD Scale - " + objectLODScaleSlider.value + "x";
objectLODScaleSlider.oninput = function() {
    objectLODScaleNumbers.innerHTML = "Object LOD Scale - " + this.value  + "x";
}

var bspScaleSlider = document.getElementById("bspScaleSlider");
var bspScaleNumbers = document.getElementById("bspScaleNumbers");
bspScaleNumbers.innerHTML = "BSP Instance Geo LOD Scale - " + bspScaleSlider.value + "x";
bspScaleSlider.oninput = function() {
    bspScaleNumbers.innerHTML = "BSP Instance Geo LOD Scale - " + this.value  + "x";
}

var fxDrawDistanceScaleSlider = document.getElementById("fxDrawDistanceScaleSlider");
var fxDrawDistanceScaleNumbers = document.getElementById("fxDrawDistanceScaleNumbers");
fxDrawDistanceScaleNumbers.innerHTML = "Effects Draw Distance Scale - " + fxDrawDistanceScaleSlider.value + "x";
fxDrawDistanceScaleSlider.oninput = function() {
    fxDrawDistanceScaleNumbers.innerHTML = "Effects Draw Distance Scale - " + this.value  + "x";
}

var particleDrawDistanceScaleSlider = document.getElementById("particleDrawDistanceScaleSlider");
var particleDrawDistanceScaleNumbers = document.getElementById("particleDrawDistanceScaleNumbers");
particleDrawDistanceScaleNumbers.innerHTML = "Particles Draw Distance Scale - " + particleDrawDistanceScaleSlider.value + "x";
particleDrawDistanceScaleSlider.oninput = function() {
    particleDrawDistanceScaleNumbers.innerHTML = "Particles Draw Distance Scale - " + this.value  + "x";
}

var decoratorsDrawDistanceScaleSlider = document.getElementById("decoratorsDrawDistanceScaleSlider");
var decoratorsDrawDistanceScaleNumbers = document.getElementById("decoratorsDrawDistanceScaleNumbers");
decoratorsDrawDistanceScaleNumbers.innerHTML = "Decorators Draw Distance Scale - " + decoratorsDrawDistanceScaleSlider.value + "x";
decoratorsDrawDistanceScaleSlider.oninput = function() {
    decoratorsDrawDistanceScaleNumbers.innerHTML = "Decorators Draw Distance Scale - " + this.value  + "x";
}
// ----- PERFORMANCE MENU END -----

// ----- CUSTOMIZATION MENU -----
// SUBMENU HANDLING
function showSubMenu(menuId) {
    const menus = document.querySelectorAll('.submenu');
    menus.forEach(menu => menu.classList.add('hidden'));
    document.getElementById(menuId).classList.remove('hidden');
}

function highlightSubButton(buttonID) {
    const menuButtons = document.querySelectorAll('.submenuButton');
    menuButtons.forEach(menuButton => menuButton.classList.remove('standout'));
    document.getElementById(buttonID).classList.add('standout');
}

document.getElementById('submenu1Button').addEventListener('click', () => {
    showSubMenu('submenu1');
    highlightSubButton('submenu1Button');
});

document.getElementById('submenu2Button').addEventListener('click', () => {
    showSubMenu('submenu2');
    highlightSubButton('submenu2Button');
});

document.getElementById('submenu3Button').addEventListener('click', () => {
    showSubMenu('submenu3');
    highlightSubButton('submenu3Button');
});
// SUBMENU HANDLING END

// COLOR GRID
const colorGrids = document.querySelectorAll('#colorGrid');
colorGrids.forEach(grid => populateColorGrid(grid));

function populateColorGrid(grid) {
    const gridName = grid.attributes["name"].value;
    grid.innerHTML = ''; // Clear existing content
    for (let i = 0; i < 60; i++) { // 12x5 grid
        const colorBox = document.createElement('button');
        colorBox.classList.add('color-box');
        colorBox.classList.add('color-' + i);
        colorBox.setAttribute('name', gridName);
        colorBox.addEventListener('click', function() {
            const colorBar = document.getElementById(gridName);
            const buttonColor = window.getComputedStyle(this).backgroundColor;
            colorBar.style.backgroundColor = buttonColor;
            // send color to memoryjs function here
        })
        grid.appendChild(colorBox);
    }
}
// COLOR GRID END

// SPARTAN APPEARANCE HANDLING
// SPARTAN ID HANDLING END
// ----- CUSTOMIZATION MENU END -----

/*
document.getElementById('toggleMemory').addEventListener('click', () => {
    window.electronAPI.toggleMemoryValue();
});
*/
