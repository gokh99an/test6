class CountdownTimer {
    constructor({ selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;

        
        this.refs = {
            days: document.querySelector(`${this.selector} [role="day"]`),
            hours: document.querySelector(`${this.selector} [role="hour"]`),
            mins: document.querySelector(`${this.selector} [role="minute"]`),
            secs: document.querySelector(`${this.selector} [role="second"]`),
        };
    }

    getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((total / 1000 / 60) % 60);
        const secs = Math.floor((total / 1000) % 60);
        return {
            total,
            days,
            hours,
            mins,
            secs,
        };
    }

    updateTimer({ days, hours, mins, secs }) {
        this.refs.days.textContent = days;
        this.refs.hours.textContent = hours;
        this.refs.mins.textContent = mins;
        this.refs.secs.textContent = secs;
    }

    startTimer() {
        const timer = this.getTimeRemaining(this.targetDate);
        this.updateTimer(timer);
        setInterval(() => {
            const timer = this.getTimeRemaining(this.targetDate);
            this.updateTimer(timer);
        }, 1000);
    }
    

}

timer = new CountdownTimer({
    selector: "#clock",
    targetDate: new Date("August, 16 2023 18:00:00")
});
    
timer.startTimer();

