import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"


test('TextEncoder is globally defined in Jest', () => {
    expect(global.TextEncoder).toBeDefined();
  });

it("should render header component with a login button",() => {
     
    
       render(
        <BrowserRouter> 
            <Provider store={appStore}>
               <Header />
            </Provider>
        </BrowserRouter>
    )

// 
    const loginButton = screen.getByRole("button",{name:"Login"});
    // const loginButton = screen.getByText("Login");

    expect(loginButton).toBeInTheDocument()
    
})


it("should render header component with cart items 0",() => {
     
    
       render(
        <BrowserRouter> 
            <Provider store={appStore}>
               <Header />
            </Provider>
        </BrowserRouter>
    )

// 
    const cartItem = screen.getByText(/Cart/);
    // const loginButton = screen.getByText("Login");

    expect(cartItem).toBeInTheDocument()
    
})


it("should change login button to logout on click",() => {
     
    
       render(
        <BrowserRouter> 
            <Provider store={appStore}>
               <Header />
            </Provider>
        </BrowserRouter>
    )

// 
    const loginButton = screen.getByRole("button",{name:'Login'});
    // const loginButton = screen.getByText("Login");
    
    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button",{name:"Logout"})

    expect(logoutButton).toBeInTheDocument()
    
})