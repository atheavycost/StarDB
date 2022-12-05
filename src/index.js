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
    const getResource = async (url) => {
        const res = await fetch(url);
        const body = await res.json();
        return body;
    };

    getResource('https://swapi.dev/api/people/1')
        .then((body) => {
            console.log(body);
        });