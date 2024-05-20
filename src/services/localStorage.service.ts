import { UserModel } from "@app/domain/UserModel";

const testUser = {
  id: 1,
  email: "a@a.com",
  userName: "@john1989",
};
import Cookies from "js-cookie";

export const persistToken = (token: string): void => {
  localStorage.setItem("accessToken", token);
};

export const readToken = (): string | null => {
  return Cookies.get("access_token") || null;
};

export const persistUser = (user: UserModel): void => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const readUser = (): UserModel | null => {
  const userStr = localStorage.getItem("user");
  return null;
  return userStr ? JSON.parse(userStr) : testUser;
};

export const deleteToken = (): void => {
  Cookies.remove("access_token");
};
export const deleteUser = (): void => localStorage.removeItem("user");
