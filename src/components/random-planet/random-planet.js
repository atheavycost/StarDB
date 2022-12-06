import React, {Component} from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './random-planet.css';

export default class RandomPlanet extends Component {

    SwapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    };

    constructor() {
        super();
        this.updatePlanet();
    }
    
    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false});
    };

    updatePlanet() {
        const id = Math.floor(Math.random() * 30) + 1;
        this.SwapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    }

    render() {

        const { planet, loading } = this.state;

        // if (loading) {
        //     return <Spinner />
        // };

        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <PlanetView planet={planet} /> : null;

        return (
            <div className='random-planet jumbotron rounded'>
                {spinner}
                {content}

                {/* <PlanetView planet={planet} /> */}
                {/* <img className='planet-image'
                      src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=' '/>
                <div>
                    <h4> {name}</h4>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
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
                </div> */}

            </div>

        );
    };
}

const PlanetView = ({planet}) => {

    const { id, population, 
        rotationPeriod, diameter, name} = planet;

    return (
        <React.Fragment>
                <img className='planet-image'
                      src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
                      alt=' '/>
                <div>
                    <h4> {name}</h4>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
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
        </React.Fragment>
    );
};