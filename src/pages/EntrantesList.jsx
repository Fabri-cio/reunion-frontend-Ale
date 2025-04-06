import ActionButton from "../components/shared/ActionButton";
import EntityList from "../components/shared/EntityList";
import { FaPlus, FaBox } from "react-icons/fa";
import { useCorrespondenciaEntrantes } from "../hooks/useEntities";

function CorrespondenciaList() {
  const entrantesFields = (handleDetallesClick) => [
    { key: "index", label: "N°" },
    { key: "nro_registro", label: "N° Registro" },
    { key: "fecha_recepcion", label: "Fecha de Recepción" },
    { key: "fecha_respuesta", label: "Fecha de Respuesta" },
    { key: "referencia", label: "Referencia" },
    {
      key: "remitente_institucion",
      label: "Remitente/Institución",
      render: (item) => `${item.nombre_remitente} - ${item.nombre_institucion}`,
    },
    {
      key: "acciones",
      label: "Acciones",
      render: (item) => (
        <ActionButton
          onClick={() => handleDetallesClick(item.id_correspondencia)}
          label="Editar"
          estilos={
            "bg-white hover:bg-gray-700 text-black py-1 px-2 rounded-md border-2 border-gray-400 flex items-center gap-2 transition duration-200 hover:text-white"
          }
        />
      ),
    },
  ];

  const entityData = {
    title: "Gestión de Entrantes",
    subTitle: "Listado de entrantes",
    loadingMessage: "Cargando correspondencia entrante...",
    errorMessage: "Error al obtener la correspondencia entrante",
    fetchDataHook: useCorrespondenciaEntrantes,
    editPath: "/editEntrante",
    all_data: false,
    itemKey: "id_correspondencia_entrante",
    entityFields: entrantesFields,
    actions: [
      {
        to: "/createEntrante",
        label: "Nuevo Registro",
        icon: FaPlus,
        estilos:
          "hover:bg-gray-600 hover:text-white py-2 px-1 text-black border-2 rounded-md border-gray-400 flex items-center gap-2 transition duration-200",
      },
    ],
    icon: FaBox,
  };

  return <EntityList entityData={entityData} />;
}

export default CorrespondenciaList;
