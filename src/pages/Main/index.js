import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';


import Boss from '../../components/boss';

export default class Main extends Component {
    state = {
        listBoss: [],
        bossInfo: {},
    }

    componentDidMount() {
        this.loadBossList();
        this.teste();
    }

    teste = async () => {
        const response = await api.get('/boss/today');

        console.log(response.data)
    }

    loadBossList = async () => {
        const response = await api.get('/boss/');
        const { days, ...bossInfo } = response.data;

        this.setState({ listBoss: days, bossInfo });
    }

    render() {
        const { listBoss } = this.state;        
        return (
            <div className="boss-list">
                {listBoss.map(boss => (
                    <Boss key={Math.random()} boss={boss} />
                ))}
            </div>
        )
    }
}

