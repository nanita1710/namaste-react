import { sum } from "../sum"

test("Sum function should calculate the sum of two numbers.",()=>{
    const result  = sum(3,4);
    expect(result).toBe(7);
});


// import { Provider } from "react-redux"
// import Header from "../Header"
// import appStore from "../../utils/AppStore"
// import "@testing-library/jest-dom";
// import { BrowserRouter } from "react-router-dom";
// import { fireEvent, render, screen } from "@testing-library/react";


// it("Should render the Header component with login button",()=>{
//     render(
//         <BrowserRouter>
//             <Provider store={appStore}>
//                 <Header />
//             </Provider>
//         </BrowserRouter>
//         );
//         const loginButton = screen.getByRole("button",{name:"Login"});
//         expect(loginButton).toBeInTheDocument();
// })

// it("Should shange login to logout on click of login button",()=>{
//     render(
//         <BrowserRouter>
//             <Provider store={appStore}>
//                 <Header />
//             </Provider>
//         </BrowserRouter>
//         );

//         const loginButton = screen.getByRole("button",{name:"Login"});
//         fireEvent.click(loginButton);
//         const logoutButton = screen.getByRole("bustton",{name:"Logout"})
//         expect(logoutButton).toBeInTheDocument();
// })