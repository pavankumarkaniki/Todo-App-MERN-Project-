import axios from "axios";

const API = "http://localhost:5000";   // ✔ correct backend URL

export const getTodos = () => axios.get(`${API}/todos`);
export const addTodo = (text) => axios.post(`${API}/todos`, { text });
export const deleteTodo = (id) => axios.delete(`${API}/todos/${id}`);
export const updateTodo = (id, completed) =>
  axios.put(`${API}/todos/${id}`, { completed });
