import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//Crear el Context
export const CategoriasContext = createContext();

//provider es donde se encuentran las funciones y el state, los datos en resumidas cuentas

const CategoriasProvider = props => {
  //en esta seccion es donde se crean los useState, useEffects, etc
  const [categorias, guardarCategorias] = useState([]);

  useEffect(() => {
    const obtenerCategoria = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const respuesta = await axios.get(url);

      guardarCategorias(respuesta.data.drinks);
    };
    obtenerCategoria();
  }, []);

  return (
    //lo que esta dentro del return es lo que estara disponible para los componentes
    <CategoriasContext.Provider value={{ categorias }}>
      {props.children}
    </CategoriasContext.Provider> //lo que esta dentro del value estara disponible para los otros componentes
  );
};

export default CategoriasProvider;
