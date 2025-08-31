import {Component} from "vue";
import {
    PhChartLineUp,
    PhArticle,
    PhQuestion,
    PhBag,
    PhMegaphone
} from "@phosphor-icons/vue";

export interface INavLinks  {
    name: string,
    path: string,
    isActive: boolean,
    iconComponent: Component,
    iconSize: number,
}

export const NavLinks: INavLinks[] = [
    {
        name: "Best",
        path: "/",
        isActive: false,
        iconComponent: PhChartLineUp,
        iconSize: 20,
    },
    {
        name: "History",
        path: "/history",
        isActive: false,
        iconComponent: PhArticle,
        iconSize: 20,
    },
    {
        name: "Asks",
        path: "/asks",
        isActive: false,
        iconComponent: PhQuestion,
        iconSize: 20,
    },
    {
        name: "Job",
        path: "/jobs",
        isActive: false,
        iconComponent: PhBag,
        iconSize: 20,
    },
    {
        name: "Polls",
        path: "/polls",
        isActive: false,
        iconComponent: PhMegaphone,
        iconSize: 20,
    },
];