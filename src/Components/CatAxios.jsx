import axios from "axios";
import React, { useEffect, useState } from "react";

const CatAxios = () => {
  const [loading, setLoading] = useState(true);
  const url = "https://api.thecatapi.com/v1/images/search";
  const [cat, setCat] = useState();

  useEffect(() => {
    // Ejemplo con then
    // axios(url)
    //   .then((res) => {
    //     console.log(res.data);
    //     setCat(res.data[0]);
    //   })
    //   .catch((err) => console.log(err));

    //Ejemplo con async/await
    const axiosData = async () => {
      let res = await axios(url);
      setCat(res.data[0]);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    axiosData();
  }, []);
  console.log("cat", cat);
  return (
    <div>
      {loading ? (
        "Cargando gatito..."
      ) : (
        <img src={cat?.url} alt="" width={400} />
      )}
    </div>
  );
};

export default CatAxios;
