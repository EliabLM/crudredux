// import { bindActionCreators } from 'redux';
import {
	AGREGAR_PRODUCTO,
	AGREGAR_PRODUCTO_ERROR,
	AGREGAR_PRODUCTO_EXITO,
} from '../types';
// import clienteAxios from '../config/axios';
import axios from 'axios';

// Crear nuevos productos
export function crearNuevoProductoAction(producto) {
	return async (dispatch) => {
		dispatch(agregarProducto());

		try {
			// insertar en la API
			// await clienteAxios.post('/productos', producto);
			await axios({
				method: 'post',
				url: 'http://localhost:4000/productos',
				data: producto,
			});
			console.log(producto);

			// si todo sale bien, actualizar el state
			dispatch(agregarProductoExito(producto));
		} catch (error) {
			console.log(error);

			// si hay un error cambiar el state
			dispatch(agregarProductoError(true));
		}
	};
}

const agregarProducto = () => ({
	type: AGREGAR_PRODUCTO,
	payload: true,
});

// si el producto se guardar en la base de datos
const agregarProductoExito = (producto) => ({
	type: AGREGAR_PRODUCTO_EXITO,
	payload: producto,
});

// si hubo un error
const agregarProductoError = (estado) => ({
	type: AGREGAR_PRODUCTO_ERROR,
	payload: estado,
});
