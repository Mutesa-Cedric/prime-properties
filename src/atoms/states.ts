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

export const showImageModal = atom<boolean>({
    key: "showImageModal",
    default: false,
});