import { atom } from "recoil";
import { AppData } from "../@types/types";

export const showDropDownMenu = atom<boolean>({
    key: "showDrowDownMenu",
    default: false,
});

export const data = atom<AppData>({
    key: "data",
    default: {
        properties: [],
        blogs: [],
        agents: [],
        agencies: [],
        services: [],
        plans: [],
        testimonials: [],
        faqs: [],
        cities: [],
    }
})