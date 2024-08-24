import {Movie} from "@/app/types/movie";
import {createContext} from "react";

export interface MovieContext {
    constraints: { search: string; typeList: 'card' | 'list' };
    setConstraints: React.Dispatch<
        React.SetStateAction<{
            search: string,
            typeList: 'card' | 'list',
        }>
    >;
}

export const MovieContext = createContext<MovieContext | null>(
    null
);