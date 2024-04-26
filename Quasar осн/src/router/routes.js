const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/Todo.vue") },
      { path: "/aboutus", component: () => import("src/pages/AboutUs.vue") },
      { path: "/contacts", component: () => import("src/pages/Contacts.vue") },
      { path: "/nature", component: () => import("src/pages/Nature.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
