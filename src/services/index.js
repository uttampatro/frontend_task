// import axios from "./axios";
import axios from "axios";

const fetchAllUser = async () => {
  try {
    const response = await axios.get(`https://panorbit.in/api/users.json`);
    return response.data.users;
  } catch (error) {
    console.log(error);
  }
};

export { fetchAllUser };
