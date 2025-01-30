import { act, fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router"
import "@testing-library/jest-dom"


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json:() => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should search restaurant list in body component",async () => {
    
    await act(async () => 
        render(
    <BrowserRouter>
        <Body />
    </BrowserRouter> 
    ) )
    
    const cardsBeforeSearch = screen.getAllByTestId("resCard")

    expect(cardsBeforeSearch.length).toBe(8)


    const searchBtn = screen.getByRole("button",{name:"Search"})

    // console.log(searchBtn);

    const searchInput = screen.getByTestId("searchInput")

    // console.log(searchInput);
    
    fireEvent.change(searchInput,{target:{value:"ch"}})

    fireEvent.click(searchBtn)

    // screen should load 2 res cards

    const cards = screen.getAllByTestId("resCard")

    expect(cards.length).toBe(2)
    


})


it("should filter restaurants on click of top rated restaurants button",async () => {
    
    await act(async () => 
        render(
    <BrowserRouter>
        <Body />
    </BrowserRouter> 
    ) )
    
    const cardsBeforFilter = screen.getAllByTestId("resCard")

    expect(cardsBeforFilter.length).toBe(8)


    const topRatedBtn = screen.getByRole("button",{name:"Top Rated Restaurants"})


    fireEvent.click(topRatedBtn)

    // screen should load 1 res cards

    const cardsAfterFilter = screen.getAllByTestId("resCard")

    expect(cardsAfterFilter.length).toBe(2)
    


})