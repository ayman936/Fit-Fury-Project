import { legacy_createStore } from "redux";
import PanierReducer from "./PanierReducer";

export const store=legacy_createStore(PanierReducer)