const BASE_URL = "https://api.advanziaeducation.com";
const API_KEY = "d7534cbd9ee8a1d277508f05318830010270e1c3699cacf82f8ec53f79b486a2";

const headers = {
  "Content-Type": "application/json",
  "x-api-key": API_KEY,
};

async function request(endpoint, options) {
  const response = await fetch(BASE_URL + endpoint, { headers, ...options });

  if (!response.ok) {
    throw new Error("Request failed with status " + response.status);
  }

  return response.json();
}

export function getCart(id) {
  return request("/carts/" + id);
}
export function getProducts() {
  return request("/products");
}

export function getProduct(id) {
  return request("/products/" + id);
}
export function registerUser(userData) {
  return request("/users", {
    method: "POST",
    body: JSON.stringify(userData),
  });
}

export function loginUser(credentials) {
  return request("/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
}
export function addCart(cartData) {
  return request("/api/carts", {
    method: "POST",
    body: JSON.stringify(cartData),
  });
}