import axios from "axios";

const getLibraries = async () => {
  const response =  await axios.get<[], any>(`${process.env.REACT_APP_API_BASE_URL}/libraries`);
  return response;
};

export { getLibraries };
        