import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';

import './person-details.css';

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null
    };

    componentDidMount() {
        this.updatePerson();
    };

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }

    };

    updatePerson() {
        const {personId} = this.state;
        if (!personId) {
            return;
        }

        this.swapiService
        .getPerson(personId)
        .then((person) => {
            this.setState({person});
        });
    };

    render() {

        if (!this.state.person) {
            return <span>Select a person from list</span>;
        };

        const { id, name, gender, mass} = this.state.person;

        return (
            <div className='person-details card'>
                <img className='person-details person-image'
                    src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
                    alt='caracter'/>
                    <div className='card-body'>
                        My name is: {name}
                        <div>with id = {id}</div>
                        <div>Gender: {gender}</div>
                        <div>mass: {mass}</div>
                    </div>
            </div>
        );
    };
};