import { useCorrespondencias } from "../../hooks/useEntities";

const Dashboard = () => {
  console.log(useCorrespondencias())
  return <h1 className="text-3xl font-bold underline ">Dashboard hola Mi Amor</h1>;
};

export default Dashboard;
