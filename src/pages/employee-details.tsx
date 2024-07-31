import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EmployeeType } from "../types/global";

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
    <div className="details">
      <div className="introduction">
        <img
          className="introduction__img"
          width={200}
          height={200}
          src={details?.imageUrl}
          alt={`Image of ${details?.firstName + " " + details?.lastName}`}
        />
        <div className="introduction__info">
          <p className="introduction__info__name">
            {details?.firstName + " " + details?.lastName}
          </p>
          <p className="introduction__info__position">{details?.position}</p>
          <p className="introduction__info__email">Email: {details?.email}</p>
          <p className="introduction__info__email">
            Contact Number: {details?.contactNumber}
          </p>
        </div>
      </div>
      <div className="info">
        <h2 className="info__title">About {details?.firstName}:</h2>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe illum
        cupiditate, iste, temporibus adipisci facere dolores quae dignissimos
        accusamus officiis quisquam optio, autem molestiae. Tempore fugiat
        libero id dolorem eveniet. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Qui incidunt, perspiciatis non omnis accusamus modi
        soluta vero dolores tempore sint reprehenderit, ducimus magnam? Sequi,
        ipsa suscipit. Ratione porro maiores praesentium? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Exercitationem excepturi laudantium
        sit, perspiciatis, architecto iste soluta, pariatur eaque reiciendis
        sapiente fugiat consequuntur numquam magni? Debitis aut dicta repellat
        laboriosam molestias? Quasi, soluta incidunt vero blanditiis voluptates
        odit maiores excepturi, ratione earum quo dolor perspiciatis expedita
        totam deleniti tenetur nam magnam accusamus dolorem. Officia voluptates,
        voluptatum consectetur unde suscipit doloremque sunt? Vero obcaecati
        beatae possimus quaerat? Officia repellat dolor incidunt beatae, rerum
        facilis, asperiores rem quam expedita blanditiis iste eaque nulla
        molestias aperiam est? Mollitia quod ab quaerat deserunt iusto?
        Temporibus?
      </div>
    </div>
  );
};

export default EmployeeDetails;
