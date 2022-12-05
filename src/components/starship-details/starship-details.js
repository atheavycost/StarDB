import React, {Component} from "react";

import SwapiService from "../../services/swapi-service";

import './starship-details.css';

export default class StarshipDetails extends Component {

    SwapiService = new SwapiService();

    state = {
        id: null,
        name: null,
        model: null
    };

    constructor() {
        super();
        this.updateStarship();
    }

    updateStarship() {
        const id = Math.floor(Math.random() * 20) + 1;
        this.SwapiService
            .getStarship(id)
            .then((starship) => {
                this.setState({
                    id,
                    name: starship.name,
                    model: starship.model
                });
            });
    };

    render() {

        const {id, name, model} = this.state;

        return (
            <div className='starship'>
                <img 
                    className='starship starship-image'
                    src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} 
                    alt=' '/>
                <div>
                    {name}
                    {model}
                </div>
            </div>
        );
    };
};