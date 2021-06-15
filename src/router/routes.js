const routes = [
  {
    path: "/signup",
    component: () => import("src/layouts/SecondaryLayout.vue"),
    children: [{ path: "", component: () => import("pages/SignUp.vue") }]
  },
  {
    path: "/login",
    component: () => import("src/layouts/SecondaryLayout.vue"),
    children: [{ path: "", component: () => import("pages/Login.vue") }]
  },
  {
    path: "/",
    component: () => import("src/layouts/SecondaryLayout.vue"),
    children: [{ path: "", component: () => import("pages/Dashboard.vue") }]
  },
  {
    path: "/products",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Products.vue") }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
