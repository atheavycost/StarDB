import 'bootswatch/dist/slate/bootstrap.min.css'; 


// fetch('https://swapi.dev/api/people/1')
//     .then((res) => {
//         // console.log('Got response: ', res.status);
//         return res.json();
//     })
//     .then((body) => {
//         console.log(body.gender);
//         console.log(body.name);
//     });


    // перепишем код, используя Асинхронную функцию
    // это чистый JS,который работает из коробки, без каких-либо библиотек.
    // const getResource = async (url) => {
    //     const res = await fetch(url);

    //     if (!res.ok) {
    //         throw new Error(`Could not fetch ${url}` + 
    //         `, recieved ${res.status}`)
    //     }
    //     const body = await res.json();
    //     return body;
    // };

    // getResource('https://swapi.dev/api/people/143434')
    //     .then((body) => {
    //         console.log(body);
    //     })
    //     .catch((err) => {
    //         console.log('Counld not fetch', err);
            
    //     });
        

class SwapiService {

    _apiBase = 'https://swapi.dev/api';

    async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + 
            `, recieved ${res.status}`)
        }
        return await res.json();
        
    }

    async getAllpeople () {
        const res = await this.getResource(`/people/`);
        return res.results;
    }

    async getAllPlanets () {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }

    async getAllStarships () {
        const res = await this.getResource(`/starships/`);
        return res.results;
    }

    getStarship (id) {
        return this.getResource(`/starships/${id}/`);
    }

    getPlanet (id) {
        return this.getResource(`/planets/${id}/`);
    }

    getPerson (id) {
        return this.getResource(`/people/${id}/`);
    }

}

const swapi = new SwapiService();

// swapi.getAllpeople().then((people) => {
//     people.forEach((p) => {
//         console.log(p.name);
//     });
// });

swapi.getPerson(3).then((p) => {
    console.log(p.name);
    });














