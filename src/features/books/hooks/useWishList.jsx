import { useContext } from "react";
import { WishListContext } from "../context/WishListContext/WishListContext";

export const useWithList = () => useContext(WishListContext)