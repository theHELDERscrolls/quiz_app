import info from "./info.js";
import moduloLegislacionLaboral from "./modulos/legislacionYPrevencion.js";
import moduloUnidadUno from "./modulos/unidadUno.js";
import moduloUnidadDos from "./modulos/unidadDos.js";
import moduloUnidadTres from "./modulos/unidadTres.js";
import moduloUnidadCuatro from "./modulos/unidadCuatro.js";
import moduloUnidadCinco from "./modulos/unidadCinco.js";
import moduloUnidadSeis from "./modulos/unidadSeis.js";
import importanteExamen01 from "./modulos/importanteExamen01.js";

export const itinerarioParaLaEmpleabilidad = {
  ...info,
  modulos: [
    moduloLegislacionLaboral,
    moduloUnidadUno,
    moduloUnidadDos,
    moduloUnidadTres,
    moduloUnidadCuatro,
    moduloUnidadCinco,
    moduloUnidadSeis,
    importanteExamen01,
  ],
};
export default itinerarioParaLaEmpleabilidad;
