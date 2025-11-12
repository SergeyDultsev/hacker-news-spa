import { Component } from "vue";
import {
    PhArticle,
    PhQuestion,
    PhBag,
} from "@phosphor-icons/vue";

export interface INavLinks  {
    name: string,
    path: string,
    iconComponent: Component,
    iconSize: number,
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
];