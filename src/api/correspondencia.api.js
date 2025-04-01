import { createApi } from "./api.config";
import { createCrudOperations } from "./api.crud";

const ApiCorrespondencia = createApi("correspondencia");

export const correspondenciaAPI = createCrudOperations(
  ApiCorrespondencia,
  "correspondencia"
);
export const correspondenciaEntranteAPI = createCrudOperations(
  ApiCorrespondencia,
  "correspondenciaEntrante"
);
export const correspondenciaSalienteAPI = createCrudOperations(
  ApiCorrespondencia,
  "correspondenciaSaliente"
);
