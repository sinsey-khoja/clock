let hours = document.querySelector('.hours')
let mins = document.querySelector('.minutes')

let s = document.querySelector('.s')
let m = document.querySelector('.m')
let h = document.querySelector('.h')



function clock() {
    let time = new Date()
    let second = time.getSeconds()
    let minut = time.getMinutes()
    let hour = time.getHours()

    s.style.transform = `rotate(${second * 6}deg)`
    m.style.transform = `rotate(${minut * 6}deg)`
    h.style.transform = `rotate(${hour * 30}deg)`

    mins.innerHTML = minut < 10 ? minut = '0' + minut : minut
    hours.innerHTML = hour < 10 ? hour = '0' + hour : hour

    setTimeout(function () {
        clock()
    }, 1000)
}

clock()


let tabsItem = document.querySelectorAll('.tabsItem')
let tabsContentItem = document.querySelectorAll('.tabsContentItem')

let stopwathBtn = document.querySelector('.stopwatch__btn')
let tabsLinkSpan = document.querySelector('.tabsLink__span')

let stopwathS = document.querySelector('.stopwatch__seconds')
let stopwathM = document.querySelector('.stopwatch__minutes')
let stopwathH = document.querySelector('.stopwatch__hours')

console.log(tabsItem, tabsContentItem);

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', function () {
        for (let i = 0; i < tabsItem.length; i++) {
            tabsItem[i].classList.remove('active')
            tabsContentItem[i].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')

    })
}

stopwathBtn.addEventListener('click', function () {
    if (stopwathBtn.innerHTML == 'start') {
        stopwathBtn.innerHTML = 'stop'
        tabsLinkSpan.classList.add('active')
        stopwath()
    } else if (stopwathBtn.innerHTML == 'stop') {
        stopwathBtn.innerHTML = 'clear'
        tabsLinkSpan.style.background = '#ff0044'
    } else if (stopwathBtn.innerHTML == 'clear') {
        stopwathBtn.innerHTML = 'start'
        tabsLinkSpan.classList.remove('active')

        stopwathS.innerHTML = 0
        stopwathM.innerHTML = 0
        stopwathH.innerHTML = 0
    }

})

function stopwath() {
    stopwathS.innerHTML++

    if (stopwathS.innerHTML > 59) {
        stopwathS.innerHTML = 0
        stopwathM.innerHTML++
    } else if (stopwathM.innerHTML > 59) {
        stopwathM.innerHTML = 0
        stopwathH.innerHTML++
    }

    stopwathS.innerHTML = stopwathS.innerHTML < 10 ? stopwathS.innerHTML = '0' + stopwathS.innerHTML : stopwathS.innerHTML


    console.log(stopwathS.innerHTML);

    if (stopwathBtn.innerHTML == 'stop') {
        setTimeout(function () {
            stopwath()
        }, 1000)
    }
}

