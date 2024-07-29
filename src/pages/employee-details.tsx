import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EmployeeType } from "./homepage";

const EmployeeDetails = () => {
  const params = useParams();
  const [details, setDetails] = useState<EmployeeType>();

  useEffect(() => {
    const getDetails = async () => {
      const data = await fetch(`http://localhost:3000/data/${params.id}`);
      const detailData = await data.json();
      setDetails(detailData);
    };

    getDetails();
  }, [params.id]);

  return (
    <div className="employee">
      <img src={details?.imageUrl} alt="" />
      {details?.firstName}
      {details?.lastName}
      {details?.id}
    </div>
  );
};

export default EmployeeDetails;
