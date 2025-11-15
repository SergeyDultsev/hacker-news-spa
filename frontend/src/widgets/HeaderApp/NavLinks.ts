import { Component } from "vue";
import {
    PhArticle,
    PhQuestion,
    PhBag,
    PhUserCircle,
    PhFingerprint
} from "@phosphor-icons/vue";

export interface INavLinks  {
    name: string,
    path: string,
    iconComponent: Component,
    iconSize: number,
    isAuth?: boolean,
}

export const NavLinks: INavLinks[] = [
    {
        name: "History",
        path: "/",
        iconComponent: PhArticle,
        iconSize: 20,
    },
    {
        name: "Asks",
        path: "/asks",
        iconComponent: PhQuestion,
        iconSize: 20,
    },
    {
        name: "Job",
        path: "/jobs",
        iconComponent: PhBag,
        iconSize: 20,
    },
    {
        name: "Profile",
        path: "/profile",
        iconComponent: PhUserCircle,
        iconSize: 20,
        isAuth: true,
    },
    {
        name: "Auth",
        path: "/auth",
        iconComponent: PhFingerprint,
        iconSize: 20,
        isAuth: false,
    },
];