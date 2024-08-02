import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { useEffect, useState } from "react";
import { OrganizationChart } from "primereact/organizationchart";

const Diagram = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/diagram");
        const result = await response.json();
        setEmployees(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(employees);

  const nodeTemplate = (node) => {
    if (node.type === "person" && node.data) {
      return (
        <div className="card">
          <div className="card__content__name">{node.data.name}</div>
          <div className="card__content">
            <img
              className="card__content__img"
              alt={`${node.data.name} Picture`}
              src={node.data.imageUrl}
            />
            <div className="card__header">{node.label}</div>
          </div>
        </div>
      );
    }

    return node.label;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!employees) {
    return <div>No data available</div>;
  }

  return (
    <div className="diagram">
      <OrganizationChart
        value={employees}
        nodeTemplate={nodeTemplate}
        selection={selection}
        selectionMode="multiple"
        onSelectionChange={(event) => setSelection(event.data)}
        className="company"
      ></OrganizationChart>
    </div>
  );
};

export default Diagram;
