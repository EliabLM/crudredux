import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../types';

// Cada reducer tiene su state
const initialState = {
	alerta: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
