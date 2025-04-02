import { correspondenciaAPI, correspondenciaEntranteAPI } from "../api/correspondencia.api";
import { RegistroApi } from "../api/usuario.api";
import { useData } from "./useData";
import { useEntityMutations } from "./useEntityMutations";

//getall()
export const useCorrespondencias = (all_data = false, page = 1) => {
  return useData(
    correspondenciaAPI,
    "correspondencias",
    null,
    {
      all_data,
      page,
    },
    1000 * 60 * 5
  );
};
//getOne()
export const useCorrespondencia= (id) => {
    return useData(
      correspondenciaAPI,
      "correspondencia",
      id
    )
}
//create(), update(), delete()
export const useCorrespondenciaMutations = () => useEntityMutations(correspondenciaAPI, "correspondencia");



//correspondenciaEntranteAPI
//getall()
export const useCorrespondenciaEntrantes = (all_data = false, page = 1) => {
  return useData(
    correspondenciaEntranteAPI,
    "correspondenciasEntrantes",
    null,
    {
      all_data,
      page,
    },
    1000 * 60 * 5
  );
};

//getOne()
export const useCorrespondenciaEntrante= (id) => {
    return useData(
      correspondenciaEntranteAPI,
      "correspondenciaEntrante",
      id
    )
}

//create(), update(), delete()
export const useCorrespondenciaEntranteMutations = () => useEntityMutations(correspondenciaEntranteAPI, "correspondenciaEntrante");


//para el registro
export const useRegisterMutations = () => useEntityMutations(RegistroApi, "Registro");