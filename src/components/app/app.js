import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page/people-page';

import './app.css';


export default class App extends Component {

    state ={
        showRandomPlanet: true,
    };

    toggleRandomPlanet = () => {

    };


    componentDidCatch() {
        console.log('componentDidCatch()');
    };

    render() {

        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

    return (
        <div className='stardb-app'>
            <Header />
            {planet}

            <button className='toggle-planet btn btn-warning btn-lg'
                    onClick={this.toggleRandomPlanet}> 
                    BUMP a random planet!
            </button>

                <div>
                    <PeoplePage />
                </div>

        </div>

    );
    };
}

