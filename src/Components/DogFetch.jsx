import React, { useEffect, useState } from "react";

const DogFetch = () => {
  const url = "https://dog.ceo/api/breeds/image/random";
  const [dog, setDog] = useState({});

  useEffect(() => {
    //Ejemplo con then
    // fetch(url)
    //   .then((respuesta) => {
    //     return respuesta.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setDog(data);
    //   })
    //   .catch((err) => console.log(err));

    //Ejemplo con async/await
    const fetchData = async () => {
      let respuesta = await fetch(url);
      let data = await respuesta.json();
      setDog(data);
      console.log("data Dog", data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <img src={dog.message} alt="" width={400} />
    </div>
  );
};

export default DogFetch;
