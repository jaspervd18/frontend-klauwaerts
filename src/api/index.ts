import axiosRoot, { AxiosInstance } from "axios";

const axios: AxiosInstance = axiosRoot.create({
  baseURL: import.meta.env.VITE_API_URL,
  // baseURL: config.base_url,
});

const getAll = async (endpoint: EndpointAll, params?: LimitOffset) => {
  return (await axios.get(endpoint, { params })).data;
};

const getById = async (endpoint: EndpointById, id: number) => {
  return (await axios.get(`${endpoint}/${id}`)).data;
};

const deleteById = async (endpoint: EndpointById, id: number) => {
  return (await axios.delete(`${endpoint}/${id}`)).data;
};

const getEventsByMonthYear = async (month: number, year: number) => {
  return (await axios.get(`/events?month=${month}&year=${year}`)).data;
};

const postNewEvent = async (event: SaveEvent) => {
  return (await axios.post("/events", event)).data;
};

const putUpdatedEvent = async (event: SaveEvent) => {
  return (await axios.put(`/events/${event.id}`, event)).data;
};

export {
  axios,
  getAll,
  getById,
  deleteById,
  postNewEvent,
  putUpdatedEvent,
  getEventsByMonthYear,
};
