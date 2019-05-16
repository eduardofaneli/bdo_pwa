import React from 'react';
import moment from 'moment-timezone/builds/moment-timezone-with-data';

import './styles.css';
import { SlowBuffer } from 'buffer';


export default class Cronometro extends React.Component {

    state = {
        days: 0,
        hours: 0,
        min: 0,
        sec: 0,
    }

    componentDidMount() {
        // update every second
        const { dateInput } = this.props;        
        this.interval = setInterval(() => {
            const date = this.calculateCountdown(dateInput);
            date ? this.setState(date) : this.stop();
        }, 1000);
    }

    componentWillUnmount() {
        this.stop();
    }

    calculateCountdown(endDate) {
        const currentDate = new Date();
        var sao_paulo = moment.tz(currentDate.toISOString(), "America/Sao_Paulo");    
        let diff = (Date.parse(new Date(endDate)) - Date.parse(sao_paulo)) / 1000;

        // clear countdown when date is reached
        if (diff <= 0) return false;

        const timeLeft = {
            years: 0,
            days: 0,
            hours: 0,
            min: 0,
            sec: 0
        };

        // calculate time difference between now and expected date
        if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
            timeLeft.years = Math.floor(diff / (365.25 * 86400));
            diff -= timeLeft.years * 365.25 * 86400;
        }
        if (diff >= 86400) { // 24 * 60 * 60
            timeLeft.days = Math.floor(diff / 86400);
            diff -= timeLeft.days * 86400;
        }
        if (diff >= 3600) { // 60 * 60
            timeLeft.hours = Math.floor(diff / 3600);
            diff -= timeLeft.hours * 3600;
        }
        if (diff >= 60) {
            timeLeft.min = Math.floor(diff / 60);
            diff -= timeLeft.min * 60;
        }
        timeLeft.sec = diff;

        return timeLeft;
    }

    stop() {
        clearInterval(this.interval);
    }

    addLeadingZeros(value) {
        value = String(value);
        while (value.length < 2) {
            value = '0' + value;
        }
        return value;
    }


    render() {
        const countDown = this.state;
    
        return (
          <div id="timer">
            <span id="days">{this.addLeadingZeros(countDown.days)}</span> days {" "}  
            <span id="hours">{this.addLeadingZeros(countDown.hours)}</span> hours {" "} 
            <span id="minutes">{this.addLeadingZeros(countDown.min)}</span> min {" "}
            <span id="seconds">{this.addLeadingZeros(countDown.sec)}</span> sec {" "}
          </div>          


        //   <div className="Countdown">
        //     {/* <span className="Countdown-col">
        //       <span className="Countdown-col-element">
        //           <strong>{this.addLeadingZeros(countDown.days)}</strong>
        //           <span>{countDown.days === 1 ? 'Day' : 'Days'}</span>
        //       </span>
        //     </span> */}
    
        //     <span className="Countdown-col">
        //       <span className="Countdown-col-element">
        //         <strong>{this.addLeadingZeros(countDown.hours)}</strong>
        //         <span>Hours</span>
        //       </span>
        //     </span>
    
    
        //     <span className="Countdown-col">
        //       <span className="Countdown-col-element">
        //         <strong>{this.addLeadingZeros(countDown.min)}</strong>
        //         <span>Min</span>
        //       </span>
        //     </span>
    
        //     <span className="Countdown-col">
        //       <span className="Countdown-col-element">
        //         <strong>{this.addLeadingZeros(countDown.sec)}</strong>
        //         <span>Sec</span>
        //       </span>
        //     </span>
        //   </div>
        );
      }

}