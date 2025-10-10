import pokeApiImage from '../assets/Proyecto_PokeApi.webp';
import portafolioWebImage from '../assets/Proyecto_Portafolio_web.webp';
import pdmImage from '../assets/Proyecto_PDM.webp';
const projects = [
 {
    id: 1,
    name: 'Poke api',
    description: 'Documento HTML en el cual por medio de una api podemos ver 151 tipos de Pokémon',
    software: ["HTML","JavaScript","CSS"],
    image: pokeApiImage,
    link: 'https://github.com/m4ti444/PokeapiDuoc'
},
 {
    id: 2,
    name: 'Portafolio web',
    description: 'Proyecto de portafolio web',
    software: ["HTML","React","Bootstrap","javaScript","CSS"],
    image: portafolioWebImage,
    link: 'https://github.com/m4ti444/Portafolio_web'
 },
 {
    id: 3,
    name: 'PDM',
    description: 'Pagina web de automotora',
    software: ["HTML","Bootstrap","javaScript","CSS"],
    image: pdmImage,
    link: 'https://github.com/matiflrs/TQT_main'
 }
];


export default projects;
