import { FaFile, FaUser } from "react-icons/fa";

export const menus = [
  //items
  {
    title: "Documentos",
    icon: FaFile,
    items: [
      { label: "Correspondencia", path: "/correspondenciaList" },
      { label: "Entrantes", path: "/entrantesList" },
      {
        label: "Enviados",
        path: "/enviadosList",
      },
    ],
  },
  //sin items
  {
    title: "Clientes",
    icon: FaUser,
    to: "/clientesList",
  },
];
