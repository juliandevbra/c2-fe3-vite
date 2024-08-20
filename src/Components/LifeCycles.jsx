import React, { useEffect, useState } from "react";

const LifeCycles = () => {
  console.log("Parte funcional del componente");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  let interval;

  //Ciclos de vida
  //Fase de montaje
  useEffect(() => {
    if (!interval) {
      interval = setInterval(() => {
        console.log("Esto se ejecuta cada 1 segundo");
      }, 1000);
    }

    setTimeout(() => {
      console.log("Esto se va a ejecutar una sola vez");
      setLoading(false);
    }, 2000);
  }, []);

  //Fase de actualización
  useEffect(() => {
    console.log("Esto se ejecuta en el montaje y cuando loading se actualiza");
    if (!loading) {
      setUser({
        name: "Romina",
        age: 25,
      });
    }
  }, [loading]);

  //Fase de desmontaje
  useEffect(() => {
    return () => {
      clearInterval(interval);
      console.log("Se desmontó el componente");
    };
  }, []);

  return (
    <div>
      {console.log("Parte render del componente")}
      {loading ? "Cargando..." : <h2>Hola, {user.name}</h2>}
    </div>
  );
};

export default LifeCycles;
