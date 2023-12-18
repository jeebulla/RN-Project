import axios from "axios";

export async function signUp(role, name, email, password, companyCode) {
  console.log("Expected values ", role, name, email, password, companyCode);
  try {
    const url =
      "https://employee-management-system-z05q.onrender.com/v1/auth/register";
    const result = await axios.post(url, {
      role,
      name,
      email,
      password,
      code: companyCode,
    });
    console.log(result.data);
    return result;
  } catch (error) {
    return error.response;
  }
}

/* ```{
    "role": "organization",
    "name": "TIIDELAB",
    "email": "helo@tidelab.com.ng",
    "password": "Tobiloba#22@"
}``` */
