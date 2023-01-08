import {createContext} from "react";

interface IContext {
    totalPrice: number,
    setTotalPrice: (price: number) => void,
    amount: number,
    setAmount: (amount: number) => void,
    isModalActive: boolean,
    setIsModalActive: (active: boolean) => void
} 

export const TotalContext = createContext<IContext>({
    totalPrice: 0,
    setTotalPrice: function (price: number): void {
        throw new Error("Function not implemented.");
    },
    amount: 0,
    setAmount: function (amount: number): void {
        throw new Error("Function not implemented.");
    },
    isModalActive: false,
    setIsModalActive: function (active: boolean): void {
        throw new Error("Function not implemented.");
    },
});
