import instance from "./base";

export const authServices = {
  async signup(payload) {
    return await instance.post(`/users/signup`, payload);
  },
  async signin(payload) {
    return await instance.post(`/users/auth`, payload);
  },
  async profile() {
    const x = await instance.get("/users/profile");
    console.log(x);
    return x;
  },
};

export const appServices = {
  async createCampaign(payload) {
    return await instance.post("/campaigns/create", payload);
  },
  async getCampaigns(page) {
    return await instance.get(`/campaigns/list?page=${page}`);
  },
  async xCampaign(payload) {
    console.log(payload);
    return await instance.delete(`/campaigns/delete/${payload}`);
  },
  async getLeads(params) {
    return await instance.get(
      `/campaigns/leads/${params.id}?page=${params.page}`
    );
  },
};

Object.freeze(authServices);
Object.freeze(appServices);