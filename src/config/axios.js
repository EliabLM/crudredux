import axios from 'axios';

const clienteAxios = axios.create({
	baseURL: 'http:localhost:4000/',
});

export default clienteAxios;

// investigar por que no funciona con la instancia
