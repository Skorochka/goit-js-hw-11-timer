
class CountdownTimer {
    constructor({selector, targetDate}) {
        this.refs = {
            valueDays: document.querySelector('span[data-value="days"]'),
            valueHours: document.querySelector('span[data-value="hours"]'),
            valueMins: document.querySelector('span[data-value="mins"]'),
            valueSecs: document.querySelector('span[data-value="secs"]'),
        }
        setInterval(this.startTimer, 1000)

        this.targetDate = targetDate
    }

    startTimer = () => {
    const dateNow = Date.now()
    const time = this.targetDate - dateNow
    

        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);


    this.refs.valueDays.textContent = days < 10 ? `0${days}` : days
    this.refs.valueHours.textContent = hours < 10 ? `0${hours}` : hours
    this.refs.valueMins.textContent = mins < 10 ? `0${mins}` : mins
    this.refs.valueSecs.textContent = secs < 10 ? `0${secs}` : secs
}
}


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Oct 9, 2021'),
});


// const refs = {
//     valueDays: document.querySelector('span[data-value="days"]'),
//     valueHours: document.querySelector('span[data-value="hours"]'),
//     valueMins: document.querySelector('span[data-value="mins"]'),
//     valueSecs: document.querySelector('span[data-value="secs"]'),
// }





// function startTimer() {
//     const targetDate = new Date('Oct 9, 2021')
//     const dateNow = Date.now()
//     const time = targetDate - dateNow
    

// const days = Math.floor(time / (1000 * 60 * 60 * 24));
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
// const secs = Math.floor((time % (1000 * 60)) / 1000);


// refs.valueDays.textContent = days < 10 ? `0${days}` : days
// refs.valueHours.textContent = hours < 10 ? `0${hours}` : hours
// refs.valueMins.textContent = mins < 10 ? `0${mins}` : mins
// refs.valueSecs.textContent = secs < 10 ? `0${secs}` : secs
// }










// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);