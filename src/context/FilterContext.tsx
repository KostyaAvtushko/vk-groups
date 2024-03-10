import { Dispatch, createContext } from "react"
import { IGroup } from "../types";
import { useReducer } from "react";

const initialState: any = [];

export const FilterContext = createContext<{ state: IGroup[]; dispatch: Dispatch<IGroup[]> }>(initialState);

const reducer = (state: IGroup[], action: IGroup[]) : IGroup[] => {
    return action;
};

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <FilterContext.Provider value={{ state, dispatch }}>
            {children}
        </FilterContext.Provider>
    )
};