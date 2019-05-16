import React from 'react'
import moment from 'moment-timezone/builds/moment-timezone-with-data';

import Cronometro from '../../components/Cronometro';

export default class Boss extends React.Component {
    addLeadingZeros(value) {
        value = String(value);
        while (value.length < 2) {
            value = '0' + value;
        }
        return value;
    }

    render() {
        const { boss } = this.props;
        const currentDate = new Date();
        const weekDay = (boss.__id - (currentDate.getDay() + 1));
        const sao_paulo = moment.tz(currentDate.toISOString(), "America/Sao_Paulo");
        const today = sao_paulo.toISOString().substr(0, 8);

        const day = (currentDate.getDate() + (((weekDay < 0)) ? (weekDay + 7) : weekDay)) + 'T'

        // const teste = {(moment.tz((Date.parse((sao_paulo.format("YYYY-MM-DD") + " " + hour.hour))), "America/Bogota")).clone("America/Cuiaba")}
        // console.log(teste.format())

        return (
            <div key={boss.__id}>
                <strong>{boss.day}</strong>
                {boss.hours.map(hour => (
                    <div key={Math.random()}>
                        {hour.hour} {hour.boss}

                        {(((sao_paulo.day() + 1) === boss.__id) && (sao_paulo.hour() > (hour.hour).substr(0, 2))) ?
                            <Cronometro dateInput={moment.tz((today + (currentDate.getDate() + (weekDay + 7)) + 'T' + hour.hour), "America/Sao_Paulo")} /> :
                            <Cronometro dateInput={moment.tz((today + day + hour.hour), "America/Sao_Paulo")} />}
                    </div>
                ))}
            </div>

        )
    }
}