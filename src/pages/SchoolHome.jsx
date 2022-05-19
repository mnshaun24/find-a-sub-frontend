import React, { useEffect, useState } from "react";
import axios from "axios";

function SchoolHome() {
  const [listOfSubs, setListOfSubs] = useState([]);

  // set up API call to backend for all subs

  const fetchAllSubs = async () => {
    const { data } = await axios.get("http://localhost:3001/api/subs/");

    console.log(data);
    setListOfSubs(data);
  };


  // make API call to backend upon page load

  useEffect(() => {
    fetchAllSubs();
  }, []);


  return (
    <>
    { listOfSubs ?
      <section>
        <div>This is school home</div>

        <div className="subList">
          {listOfSubs.map((eachSub) => {
            return (
              <div key={eachSub._id}>
                <h1>Name: {eachSub.subName}</h1>
                <h2>Email: {eachSub.subEmail}</h2>
                <h2>Location: {eachSub.subZipCode}</h2>
                <h2>Availability: {eachSub.subAvailability}</h2>
                <h2>Primary Subject: {eachSub.subSpecialty}</h2>
              </div>
            );
          })}
        </div>
      </section> :
      <h1>
        Sorry, there are no subsitutes with active profiles.
      </h1>
}

    </>
  );
}

export default SchoolHome;
