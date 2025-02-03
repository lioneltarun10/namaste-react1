import { act, fireEvent, render,screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router"
import Header from "../Header"
import "@testing-library/jest-dom"
import Cart from "./../Cart"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => { return Promise.resolve(MOCK_DATA) }
    })
})

it("should load restaurant Menu Component",async () =>{
    

    await act(async () => render(
    
        <BrowserRouter>
            <Provider store={appStore}> 
                <Header />   
                <RestaurantMenu />
                <Cart />
            </Provider> 
      </BrowserRouter>  

)) 
    
    const accordianHeader = screen.getByText("Veg Pizza (14)");
    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId("food-items").length).toBe(14);

    const addBtns = screen.getAllByRole("button",{name:"Add +"})

    expect(screen.getByText("Cart(0 items)")).toBeInTheDocument();
    // console.log(addBtns);

    fireEvent.click(addBtns[0]);
    
    expect(screen.getByText("Cart(1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart(2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("food-items").length).toBe(16);

    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}))

    expect(screen.getAllByTestId("food-items").length).toBe(14);

    expect(screen.getByText("Cart(0 items)")).toBeInTheDocument();

    expect(screen.getByText("Cart is empty Add items to the cart!")).toBeInTheDocument()

}) 