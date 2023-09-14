import axios from "axios";
import ILibrary from "../models/ILibrary";

const getLibraries = async () => {
  const response =  await axios.get(`${process.env.REACT_APP_API_BASE_URL}/libraries`);
  return response.data as ILibrary[];
  //always return the response.data
};

export { getLibraries };
        