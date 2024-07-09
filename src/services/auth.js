import { axiosClient } from "./axiosInstance";

export const getLoginData = async (loginData) => {
  try {
    const loginDatas = new FormData();
    loginDatas.append("username", loginData.username);
    loginDatas.append("password", loginData.password);

    const res = await axiosClient.post("/auth/authenticate", loginDatas, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });

    const accessToken = res.data.access_token;
    const refreshToken = res.data.refresh_token;
    console.log(54687, accessToken, refreshToken);
    console.log("data", res.data.refresh_token);
    return res;
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
};
