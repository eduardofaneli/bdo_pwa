import React from 'react'

export default class Boss extends React.Component {
    render() {
        const { boss } = this.props;
        return (
            <article key={boss.__id}>
                <strong>{boss.day}</strong>
                {boss.hours.map(hour => (
                    <a key={Math.random()}>
                        <p>{hour.hour} {hour.boss}</p>

                    </a>

                ))}
            </article>
        )
    }
}