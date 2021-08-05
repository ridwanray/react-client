import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Data(props) {
  const [passedData, setPassedData] = useState(props.alldatas);

  const allstate = useSelector((state) => state);

  useEffect(() => {
    {
      console.log("consoling from Data effect");
    }
  }, []);

  return (
    <>
      {passedData.map((data) => (
        <tr key={data.id}>
          <td scope="col">{data.location}</td>
          <td scope="col">{data.customer_name}</td>
          <td scope="col">{data.amount_paid}</td>

          <td scope="col">{data.volume_dispensed}</td>
          <td scope="col">{data.complete_status?'completed':'not completed'}</td>
        </tr>
      ))}
    </>
  );
}

export default Data;
