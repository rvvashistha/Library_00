import React, { useEffect, useState } from "react";
import { getLibraries } from "../../services/libraries";

const LibrarieList = () => {
  const [libraries, setlibraries] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState<null | Error>(null);

  useEffect(() => {
    const helper = async () => {
      try {
        const libraries = await getLibraries();
        setlibraries(libraries);
        setloading(false);
      } catch (error) {
        seterror(error as Error)
        setloading(false)
      }
    };
    return () => {
      helper();
    };
  }, []);

  return <div></div>;
};

export default LibrarieList;
