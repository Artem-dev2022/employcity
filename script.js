const dropdown = document.querySelector('.dropdown')
const dropdownBtn = document.querySelector('.dropdown__btn')
const dropdownPlaceholder = document.querySelector('.dropdown__placeholder')
const dropdownItem = document.querySelectorAll('.dropdown__item')
const volumeSlider = document.querySelector('.volume__slider')
const volumeLevel = document.querySelector('.volume__level')
const volumeHandle = document.querySelector('.volume__handle')
const volumePercent = document.querySelector('.volume__percent')

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('dropdown--active')
})

document.addEventListener('click', (e) => {
    if (e.target !== dropdownBtn) {
        dropdown.classList.remove('dropdown--active')
    }
})

dropdownItem.forEach(item => {
    item.addEventListener('click', () => {
        dropdownPlaceholder.value = item.textContent
    })
})

function slider(){
    let volumeOffsetX = 0;
    function getOffset(){
        const volume = volumeSlider.getBoundingClientRect();
        volumeOffsetX = volume.left;
    }
    getOffset()
    window.onscroll = function(){
        getOffset()
    } 
    window.onresize = function(){
        getOffset()
    } 

    function mouseUp(){
        document.removeEventListener('pointermove', mouseMove)
    }

    document.addEventListener('pointerup', mouseUp)

    function mouseDown(){
        document.addEventListener('pointermove', mouseMove)
    }
    
    function mouseMove(e){
        if (e.pageX > volumeOffsetX && e.pageX < volumeSlider.offsetWidth + volumeSlider.offsetLeft) {
            let percent = Math.round((e.pageX - volumeSlider.offsetLeft) / volumeSlider.offsetWidth * 100)
            volumePercent.textContent = `${percent}%`
            volumeLevel.style.width = `${percent}%`
        }
    }

    volumeHandle.addEventListener('pointerdown', mouseDown)
}

slider()

/// burger menu
const burgerBtn = document.querySelector('.burger')
const closeBtn = document.querySelector('.close')
const nav = document.querySelector('.header__nav')

burgerBtn.addEventListener('click', () => {
    nav.classList.add('visible')
})

closeBtn.addEventListener('click', () => {
    nav.classList.remove('visible')
})