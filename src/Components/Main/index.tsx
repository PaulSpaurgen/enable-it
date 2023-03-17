import React, { useEffect, useState } from "react";
import "./index.css";

export default function Main() {
  const [usersNumber, setUsersNumber] = useState(10);
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    setIsloading(true)
    fetch(
      `https://give-me-users-forever.vercel.app/api/users/${usersNumber}/next`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.users);
        setData(data.users);
        setIsloading(false)
      });
  }, [usersNumber]);
  return (
    <div className="flex-center">
      <div>
        <div className="heading">
          <p>User Detailed Information</p>
        </div>
        <div className="table-container">
          <div className="table-wrapper">
            {isLoading ? (
              <div className="flex-center custom-height">
                <span className="loader"> </span>
              </div>
            ) : (
              <table id="customers">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Job Title</th>
                  <th>Company</th>
                </tr>
                {data?.map((value: any) => (
                  <tr key={value.id}>
                    <td >{value.FirstNameLastName}</td>
                    <td>{value.Email}</td>
                    <td>{value.Phone}</td>
                    <td>{value.JobTitle}</td>
                    <td>{value.Company}</td>
                  </tr>
                ))}
              </table>
            )}
          </div>
          <div className="button-container">
            <button
              onClick={()=>{
                if(!(usersNumber <= 10 ) ){
                  setUsersNumber(usersNumber-10)
                }
              }}
            >{"< Prev"}</button>
            <p>Showing {data.length} records </p>
            <button
              onClick={()=>{
                setUsersNumber(usersNumber+10)
              }}
            >{"Next >"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
// Company: "AECOM";
// Email: "Juliette_Gregory2942@vetan.org";
// EmailAddress: "Juliette_Gregory8697@nickia.com";
// FirstNameLastName: "Juliette Gregory";
// ID: "11";
// JobTitle: "Systems Administrator";
// : "3-143-808-2420";
