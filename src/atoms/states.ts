import { atom } from "recoil";

export const showDropDownMenu = atom<boolean>({
    key: "showDrowDownMenu",
    default: false,
});