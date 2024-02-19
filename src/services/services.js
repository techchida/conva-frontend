import instance from "./base";

export const authServices = {
  async signup(payload) {
    return await instance.post(`/signup`, payload);
  },
};
