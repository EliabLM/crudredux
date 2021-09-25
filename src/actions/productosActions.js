// import { bindActionCreators } from 'redux';
import {
	AGREGAR_PRODUCTO,
	AGREGAR_PRODUCTO_ERROR,
	AGREGAR_PRODUCTO_EXITO,
} from '../types';

// Crear nuevos productos
export function crearNuevoProductoAction(producto) {
	return (dispatch) => {
		dispatch(agregarProducto());

		try {
			dispatch(agregarProductoExito(producto));
		} catch (error) {
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
