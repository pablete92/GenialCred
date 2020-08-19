import Vue from "vue";
import Router from "vue-router";
import { AuthLayout } from "@/components/layouts/index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "",
      component: AuthLayout,
      children: [
        {
          path: "/",
          name: "Login",
          component: () => import("@/views/Login")
        }
      ]
    }
  ]
});
