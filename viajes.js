// viajes.js
import { destinos, precios } from "./data.js";

export const registrarDestino = (destino, fecha, transporte) => {
const costo = calcularCosto(destino, transporte);
const nuevoViaje = { destino, fecha, transporte, costo };
destinos.push(nuevoViaje);
};

export const calcularCosto = (destino, transporte) => {
const costoBase = precios.destino[destino] || 0;
const costoTransporte = precios.transporte[transporte] || 0;
return costoBase + costoTransporte;
};

export const mostrarItinerario = () => {
destinos.forEach(({ destino, fecha, transporte, costo }) => {
    console.log(`Destino: ${destino}`);
    console.log(`Fecha: ${fecha}`);
    console.log(`Transporte: ${transporte}`);
    console.log(`Costo: $${costo}`);
    console.log("---------------------------");
});
};
