import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchInput from "../components/search-input";

export type EmployeeType = {
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
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

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
      <SearchInput setSearch={setSearch} />
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Job Title</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item: EmployeeType) => {
              const keys = ["firstName", "lastName"] as (keyof EmployeeType)[];
              return search === ""
                ? true
                : keys.some((key) => item[key].toLowerCase().includes(search));
            })
            .map((employee, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={employee.imageUrl}
                      height={25}
                      width={25}
                      alt="Image of an employee"
                    />
                  </td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>{employee.position}</td>
                  <td>
                    <button
                      onClick={() => navigate(`/employee/${employee.id}`)}
                    >
                      details
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      ;
    </div>
  );
};

export default HomePage;
