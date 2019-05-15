import React from 'react'

import Cronometro from '../../components/Cronometro';

export default class Boss extends React.Component {
    render() {
        const { boss } = this.props;
        const currentDate = new Date();
        const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
        const weekDay = (boss.__id - (currentDate.getDay() + 1));
        
        return (
            <article key={boss.__id}>
                <strong>{boss.day}</strong>
                {boss.hours.map(hour => (
                    <a key={Math.random()}>                        
                        <p>{hour.hour} {hour.boss} </p>                                                
                         {((weekDay) == 0) ? <Cronometro dateInput={`${year}-0${(currentDate.getMonth() +1)}-${currentDate.getDate()}T${hour.hour}:00`} />: <Cronometro dateInput={`${year}-0${(currentDate.getMonth() +1)}-${(currentDate.getDate() + weekDay)}T${hour.hour}:00`} />}                    
                    </a>
                
                    
                ))}
            </article>

        )
    }
}