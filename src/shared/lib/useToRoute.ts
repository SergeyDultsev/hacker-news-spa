import router from "@/app/router";
import { routes } from "@/app/router";

export const useToRoute = (url: string) => {
    const route = routes.find(route => route.path === url);
    route ? router.push(route) : router.push('/error/not-found');
}