import axios from "axios";

export async function signUp(role, name, email, password, companyCode) {
  console.log("Expected values ", role, name, email, password, companyCode);
  try {
    let result;
    const url =
      "https://employee-management-system-z05q.onrender.com/v1/auth/register";

    if (role === "staff") {
      console.log({
        role: "staff",
        name,
        email,
        password,
        code: companyCode,
      });
      result = await axios.post(url, {
        role: "staff",
        name,
        email,
        password,
        code: companyCode,
      });
    } else if (role === "organization") {
      console.log({
        role: "organization",
        name,
        email,
        password,
      });
      result = await axios.post(url, {
        role: "organization",
        name,
        email,
        password,
      });
    }
    console.log(result.data);
    return result;
  } catch (error) {
    return error.response;
  }
}

export async function login(email, password) {
  console.log("Expected values: ", email, password);
  try {
    const url =
      "https://employee-management-system-z05q.onrender.com/v1/auth/login";
    const result = await axios.post(url, { email, password });
    console.log("===== This is the response from the api ======", result.data);
    return result;
  } catch (error) {
    return error.response;
  }
}
