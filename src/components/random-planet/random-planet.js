import React, {Component} from 'react';

import SwapiService from '../../services/swapi-service';

import './random-planet.css';

export default class RandomPlanet extends Component {

    SwapiService = new SwapiService();

    state = {
        population: null,
        rotationPeriod: null,
        diameter: null,
        name: null
    };

    constructor() {
        super();
        this.updatePlanet();
    }
    
    updatePlanet() {
        this.SwapiService
            .getPlanet(7)
            .then((planet) => {
                this.setState({
                    name: planet.name,
                    population: planet.population,
                    rotationPeriod: planet.rotation_period,
                    diameter: planet.diameter
                });
            });
    };

    render() {

        const { population, 
            rotationPeriod, diameter, name} = this.state;

        return (
            <div classNmae='random-planet jumbotron rounded'>
            <img className='planet-image'
                 src='https://starwars-visualguide.com/assets/img/planet/5.jpg' />

                 <div>
                    <h4> {name}</h4>
                    <ul>
                        <li className='list-group list-group-flush'>
                            <span className='term'>Population</span>
                            <span>{population}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Rotation Period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Diameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                 </div>

                 </div>

        );
    };
}