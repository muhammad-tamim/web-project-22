import { useContext } from "react";
import { ReadListContext } from "../context/ReadListContext/ReadListContext";

export const useReadLits = () => useContext(ReadListContext)