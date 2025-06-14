import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resDataMock.json";
import "@testing-library/jest-dom";

it("Should render the restarurant card componnet with props data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);
    const name = screen.getByText("Theobroma");
    expect(name).toBeInTheDocument();
})


it("Should render the restarurant card componnet with promoted Label",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);
    //Homework
})