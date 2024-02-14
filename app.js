let headerMenu = document.getElementById('header-menu')
headerMenu.onclick = function() {
    let menu = document.getElementById('menu')
    menu.classList.toggle('display-none')
}

let house = document.getElementById('house')
house.onclick = function() {
    let housePage = document.getElementById('house-page')
    housePage.classList.toggle('display-none')
}

let quads = document.getElementById('quads')
quads.onclick = function() {
    let quadPage = document.getElementById('quad-page')
    quadPage.classList.toggle('display-none')
}

let chan = document.getElementById('chan')
chan.onclick = function() {
    let chanPage = document.getElementById('chan-page')
    chanPage.classList.toggle('display-none')
}

let map = document.getElementById('map')
map.onclick = function() {
    let mapPage = document.getElementById('map-page')
    mapPage.classList.toggle('display-none')
}