import { atom } from "recoil";
import { AppData } from "../@types/types";

export const showDropDownMenu = atom<boolean>({
    key: "showDrowDownMenu",
    default: false,
});

export const currentImage = atom<string | null>({
    key: "currentImage",
    default: null,
});

export const currentVideo = atom<string | null>({
    key: "currentVideo",
    default: null
})


export const showModal = atom<boolean>({
    key: "showModal",
    default: false,
});