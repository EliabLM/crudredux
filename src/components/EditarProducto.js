import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editarProductoAction } from '../actions/productosActions';
import { useHistory } from 'react-router-dom';

function EditarProducto() {
	const history = useHistory();
	const dispatch = useDispatch();

	// nuevo state de producto
	const [producto, guardarProducto] = useState({
		nombre: '',
		precio: '',
	});

	// producto a editar
	const productoeditar = useSelector((state) => state.productos.productoeditar);

	// Llena el state automaticamente
	useEffect(() => {
		guardarProducto(productoeditar);
	}, [productoeditar]);

	// Evita el error al recargar la pagina mientras se esta editando un producto
	if (!productoeditar) return null;

	// Leer los datos del formulario
	const onChangeFormulario = (e) => {
		guardarProducto({
			...producto,
			[e.target.name]: Number(e.target.value),
		});
	};

	const { nombre, precio } = producto;

	const submitEditarProducto = (e) => {
		e.preventDefault();

		dispatch(editarProductoAction(producto));

		history.push('/'); //redirecciona a la pagina principal
	};

	return (
		<div className="row justify-content-center">
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center mb-4 font-weight-bold">
							Editar Producto
						</h2>

						<form onSubmit={submitEditarProducto}>
							<div className="form-group">
								<label>Nombre Producto</label>
								<input
									type="text"
									className="form-control"
									placeholder="Nombre Producto"
									name="nombre"
									value={nombre}
									onChange={onChangeFormulario}
								/>
								<label>Precio Producto</label>
								<input
									type="number"
									className="form-control"
									placeholder="Precio Producto"
									name="precio"
									value={precio}
									onChange={onChangeFormulario}
								/>
							</div>

							<button className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
								Guardar cambios
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EditarProducto;
