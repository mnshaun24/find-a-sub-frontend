import React, { useEffect, useState } from "react";
import axios from "axios";

function SchoolHome() {
  const [listOfSubs, setListOfSubs] = useState([]);

  // set up API call to backend

  const fetchAllSubs = async () => {
    const { data } = await axios.get("http://localhost:3001/api/find-subs/");

    setListOfSubs(data);
  };

  // make API call to backend

  useEffect(() => {
    fetchAllSubs();
  }, []);

  return (
    <>
      <section>
        <div>This is school home</div>
        <div className="subList">
          {listOfSubs.map((eachSub) => {
            return (
              <div key={eachSub._id}>
                <h1>Name: {eachSub.subName}</h1>
                <h1>Email: {eachSub.subEmail}</h1>
                <h1>Location: {eachSub.subZipCode}</h1>
                <h1>Primary Subject: {eachSub.subSpecialty}</h1>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default SchoolHome;
