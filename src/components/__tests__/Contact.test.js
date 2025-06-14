import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases",()=>{
    it("Should load the button inside the Contact Component",()=>{
        render(<Contact />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        // const heading = screen.getByRole("heading");
        // expect(heading).toBeInTheDocument();
    });

    it("Should load the input name inside the Contact Component",()=>{
        render(<Contact />);
        const inputName = screen.getByPlaceholderText("Name");
        expect(inputName).toBeInTheDocument();
    });

    it("Should load the 2 input boxes inside the Contact Component",()=>{
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).not.toBe(3);
    });
})

