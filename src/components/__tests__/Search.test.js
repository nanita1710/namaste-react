import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MOCK_DATA); 
        }
    })
})

it("Should render top rated restaurants",async()=>{
   await act(()=>{
    render(<BrowserRouter><Body /></BrowserRouter>)
   });
   const cardsBeforeFilter = screen.getAllByTestId("resCard");
   expect(cardsBeforeFilter.length).toBe(20);

   const topRatedBtn = screen.getByRole("button",{name:"Top Rated Restaurants"});
   fireEvent.click(topRatedBtn);
    //screen should load 3 cards
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(20);
    
})

it("Should render the reslist when searched kfc",async()=>{
   await act(()=>{
    render(<BrowserRouter><Body /></BrowserRouter>)
   });
   const cardsBeforeSearch = screen.getAllByTestId("resCard");
   expect(cardsBeforeSearch.length).toBe(20);
   const searchBtn = screen.getByRole("button",{name:"Search"});
   const searchInput = screen.getByTestId("SearchInput");
   fireEvent.change(searchInput,{target:{value:"KFC"}});
   fireEvent.click(searchBtn);

   //screen should load one card
   const cardsAfterSearch = screen.getAllByTestId("resCard");

   expect(cardsAfterSearch.length).toBe(1);
    
})