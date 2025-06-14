import { act, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should render the restuarnat menu component",async()=>{
    await act(async()=>{
        render(<Provider store={appStore}><RestaurantMenu /></Provider>)
    });

    const accordinHeader = screen.getByText("Deluxe Veggie Pizza");
})