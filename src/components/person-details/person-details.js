import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';

import './person-details.css';

export default class PersonDetails extends Component {

    SwapiService = new SwapiService();

    state = {
        id: null,
        name: null
    };

    constructor() {
        super();
        this.updatePerson();
    }

    updatePerson() {
        const id = Math.floor(Math.random() * 81 ) + 1;
        this.SwapiService
            .getPerson(id)
            .then((person) => {
                this.setState({
                    name: person.name,
                    id
                });
            });
    };


    render() {

        const {name, id} = this.state

        return (
            <div className='person-details card'>
                <img className='person-details person-image'
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=' '/>
                    <div>
                        {name}
                        <div>with id = {id}</div>
                    </div>
            </div>
        );
    };
};