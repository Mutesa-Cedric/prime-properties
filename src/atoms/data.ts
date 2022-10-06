import { atom } from "recoil";
import { Agent } from "../@types/types";

export const storedAgents = atom<Agent[]|null>({
    key: "agents",
    default: null
})