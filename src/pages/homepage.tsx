import { useEffect, useState } from "react";

type EmployeeType = {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  imageUrl: string;
  contactNumber: string;
  email: string;
};

const HomePage = () => {
  const [data, setData] = useState<EmployeeType[]>([]);

  const getData = () => {
    fetch("http://localhost:3000/data")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        console.log(res);
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="home">
      <p>ja sam home stranica</p>
      <div className="zaposlenici">
        {data.map((employee) => {
          return (
            <div className="zaposlenik">
              <img src={employee.imageUrl} alt={employee.firstName} />
              <p>{employee.firstName}</p>
              <p>{employee.lastName}</p>
              <p>{employee.position}</p>
              <p>{employee.email}</p>
              <p>{employee.contactNumber}</p>
              <p>{employee.id}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
