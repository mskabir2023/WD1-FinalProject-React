import axios from "axios";

const TOKEN_KEY = "USER_TOKEN";
axios.defaults.baseURL = "http://localhost:5001";

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function cleanBeforeLogout() {
  localStorage.removeItem(TOKEN_KEY);
  delete axios.defaults.headers.common["Authorization"];
}

export async function registerNewUser(user) {
  try {
    let res = await axios.post("/signup", user);
    return res.data;
  } catch (error) {
    console.log("Cannot register the new user");
    return { success: false, error: "Cannot register the new user" };
  }
}

export async function login(user) {
  try {
    let res = await axios.post("/login", user);
    console.log(res.data);
    return res.data;
  } catch (error) {
    return { success: false, error: "Login failed" };
  }
}

export async function editProduct(product) {
  try {
    const response = await axios.put("products/" + product.id, product);
    return response.data;
  } catch (error) {
    alert("Error editing product");
  }
}

export async function addProduct(product) {
  try {
    const response = await axios.post("/products", product);
    //console.log("Product adding successfully:", response.data);
    return response.data;
  } catch (error) {
    alert("Error adding product");
  }
}

export async function getProduct(productId) {
  try {
    const response = await axios.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    alert("Error getting product");
  }
}

export async function deleteProduct(id) {
  try {
    const res = await axios.delete(`products/${id}`);
    return res.data;
  } catch (error) {
    alert("Error deleting product!");
  }
}

export async function loadProducts() {
  try {
    const response = await axios.get("/products/");
    return response.data;
  } catch (error) {
    alert("Error loading products");
  }
}

export async function chat(question) {
  try {
    const response = await axios.post("/chat/", { question });
    return response.data;
  } catch (error) {
    alert("Error getting chat response!");
  }
}
