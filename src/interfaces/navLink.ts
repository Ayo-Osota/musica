import { RouteLocationRaw } from "vue-router";

export interface NavLinkInterface {
  id: string,
  name: string,
  icon: any,
  route: RouteLocationRaw,
}