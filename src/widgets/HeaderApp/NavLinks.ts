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
    iconComponent: Component,
    iconSize: number,
}

export const NavLinks: INavLinks[] = [
    {
        name: "Best",
        path: "/",
        iconComponent: PhChartLineUp,
        iconSize: 20,
    },
    {
        name: "History",
        path: "/history",
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
        name: "Polls",
        path: "/polls",
        iconComponent: PhMegaphone,
        iconSize: 20,
    },
];