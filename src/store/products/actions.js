export function getProductsAction({ commit }) {
  console.log("hello");
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(json => commit("setProducts", json));
}
