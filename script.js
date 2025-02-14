let countDays = document.querySelector('.new-year_day span');
let dayTimes = document.querySelector('.new-year_times');
let date = new Date();
let year = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())
let newYear = new Date(date.getFullYear()+1, 0, 0, 23, 59, 59);
let differenceInMilliseconds = newYear.getTime() - year.getTime();
let day,resDay,hours,minutes,seconds;
day = differenceInMilliseconds / (1000 * 60 * 60 * 24);
resDay = Math.trunc(day);

let numberDay;
function getWordDay(day) {
    let numberDay = day % 10
    if (numberDay == 1) {
        return 'день';
    } else if (numberDay >= 2 && numberDay <= 4) {
        return 'дня';
    } else if (numberDay >= 5 && numberDay <= 9 || numberDay == 0) {
        return 'дней';
    } else {
        return 'дней';
    }
}

let newYearWrapper = document.querySelector('.new-year_container');
let happyNewYear = document.createElement('img');
if (resDay == 0) {
    getTimesIfZeroDay(hours, minutes, seconds, countDays);
} else {
    countDays.textContent = `${resDay}`;
    dayTimes.textContent = `${getWordDay(resDay)}`;
}

function addZero(num) {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    };
};

function getTimesIfZeroDay(h,m,s, countD){
    let times = document.querySelector('.new-year_times');
    times.textContent = 'часов';
    h = newYear.getHours() - year.getHours();
    m = newYear.getMinutes() - year.getMinutes();
    s = newYear.getSeconds() - year.getSeconds();
    if (h == '00' && m == '00' && s == '00') {
        happyNewYear.classList.add('happyNewYearImg');
        newYearWrapper.firstElementChild.style.display = 'none';
        dayTimes.style.display = 'none'
        happyNewYear.src = 'img/photo-by-anastasiya-romanova-on-unsplash.jpg';
        countDays.textContent = `C Новым ${newYear.getFullYear()+1} годом`;
        newYearWrapper.append(happyNewYear)
    } else {
        setInterval(() => {
            if (s == 0) {
                s = 60;
                m -= 1;
            } 
            
            if (m == 0) {
                m = 59;
                h -= 1;
            }
            countD.textContent = `${addZero(h)}:${addZero(m)}:${addZero(s -= 1)}`;
        }, 1000)
    }
}
