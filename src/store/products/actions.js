export function getProductsAction({ commit }) {
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(json => commit("setProducts", json));
}
