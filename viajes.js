// viajes.js
import { viajes, precios } from './data.js';

// Registrar destino
export const registrarDestino = (destino, fecha, transporte) => {
viajes.push({ destino, fecha, transporte });
};

// Calcular costo
export const calcularCosto = (destino, transporte) => {
const costoDestino = precios.destino[destino] || 0;
const costoTransporte = precios.transporte[transporte] || 0;
return costoDestino + costoTransporte;
};

// Mostrar itinerario
export const mostrarItinerario = () => {
viajes.forEach(viaje => {
    const total = calcularCosto(viaje.destino, viaje.transporte);
    console.log(`Destino: ${viaje.destino}, Fecha: ${viaje.fecha}, Transporte: ${viaje.transporte}, Total: $${total}`);
});
};
