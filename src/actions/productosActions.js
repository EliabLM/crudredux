// import { bindActionCreators } from 'redux';
import {
	AGREGAR_PRODUCTO,
	AGREGAR_PRODUCTO_ERROR,
	AGREGAR_PRODUCTO_EXITO,
	COMENZAR_DESCARGA_PRODUCTOS,
	DESCARGA_PRODUCTOS_ERROR,
	DESCARGA_PRODUCTOS_EXITO,
} from '../types';
// import clienteAxios from '../config/axios';
import axios from 'axios';
import Swal from 'sweetalert2';
import productosReducer from '../reducers/productosReducer';

// ======================
// Crear nuevos productos
// ======================
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

			// Alerta
			Swal.fire('Correcto', 'El producto se agregó correctamente', 'success');
		} catch (error) {
			console.log(error);
			// si hay un error cambiar el state
			dispatch(agregarProductoError(true));

			// Alerta de error
			Swal.fire({
				icon: 'error',
				title: 'Hubo un error',
				text: 'Hubo un error, intenta de nuevo',
			});
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

// ======================================================
// funcion que descarga los productos de la base de datos
// ======================================================
export function obtenerProductosAction() {
	return async (dispatch) => {
		dispatch(descargarProductos());

		try {
			const respuesta = await axios({
				method: 'get',
				url: 'http://localhost:4000/productos',
				responseType: 'stream',
			});
			dispatch(descargaProductosExitosa(respuesta.data));
		} catch (error) {
			console.log(error);
			dispatch(descargaProductosError());
		}
	};
}

const descargarProductos = () => ({
	type: COMENZAR_DESCARGA_PRODUCTOS,
	payload: true,
});

const descargaProductosExitosa = (productos) => ({
	type: DESCARGA_PRODUCTOS_EXITO,
	payload: productos,
});

const descargaProductosError = () => ({
	type: DESCARGA_PRODUCTOS_ERROR,
	payload: true,
});
