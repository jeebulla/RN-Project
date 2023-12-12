import axios from "axios";

export const signUp = async (role, name, email, password) => {
  try {
    const res = await axios.post(
      "https://employee-management-system-z05q.onrender.com/v1/auth/register",
      { role, name, email, password }
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

export const login = async (email, password) => {
  try {
    const res = await axios.post(
      "https://employee-management-system-z05q.onrender.com/v1/auth/login",
      { email, password }
    );
    return res;
  } catch (error) {
    return error.response;
  }
};
