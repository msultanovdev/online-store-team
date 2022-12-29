import {createContext} from "react";

interface IContext {
    totalPrice: number,
    setTotalPrice: (price: number) => void,
} 

export const TotalContext = createContext<IContext>({
    totalPrice: 0,
    setTotalPrice: function (price: number): void {
        throw new Error("Function not implemented.");
    }
});