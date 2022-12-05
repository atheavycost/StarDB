import React, {Component} from 'react';

import SwapiService from '../../services/swapi-service';

import './random-planet.css';

export default class RandomPlanet extends Component {

    SwapiService = new SwapiService();

    state = {
        id: null,
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
        const id = Math.floor(Math.random() * 59) + 1;
        this.SwapiService
            .getPlanet(id)
            .then((planet) => {
                this.setState({
                    name: planet.name,
                    population: planet.population,
                    rotationPeriod: planet.rotation_period,
                    diameter: planet.diameter,
                    id
                });
            });
    };

    render() {

        const { population, 
            rotationPeriod, diameter, name, id} = this.state;

        return (
            <div className='random-planet jumbotron rounded'>
            <img className='planet-image'
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=' '/>

                 <div>
                    <h4> {name}</h4>
                    <ul>
                        <li className='list-group list-group-flush'>
                            <span className='term'>Population: </span>
                            <span>{population}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Rotation Period:  </span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Diameter: </span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                 </div>

                 </div>

        );
    };
}