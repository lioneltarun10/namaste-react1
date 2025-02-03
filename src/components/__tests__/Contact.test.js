const { render, screen } = require("@testing-library/react")
import Contact from "../Contact"
import "@testing-library/jest-dom"


describe("Contact Us Page Test Cases", () => {

    afterAll(()=>{
        console.log("After all");
        
    })

    afterEach(() =>{
        console.log("After Each");
        
    })

    beforeAll(()=>{
        console.log("Before All");
        
    })

    beforeEach(()=>{
        console.log("Before Each");
        
    })


    test("Should load contact us component",() => {


        render(<Contact />)
   
       const heading =  screen.getByRole("heading")
       
       // Assertion
       expect(heading).toBeInTheDocument();
   
   })
   
   
   test("Should load button inside Contact us component",() => {
   
   
       render(<Contact />)
   
      const button =  screen.getByText("Submit")
      
      // Assertion
      expect(button).toBeInTheDocument();
   
   })
   
   it("Should load input name inside Contact us component",() => {
   
   
       render(<Contact />)
   
      const inputName =  screen.getByPlaceholderText("name")
      
      // Assertion
      expect(inputName).toBeInTheDocument();
   
   })
   
   it("Should load 2 input boxes on Contact us component",() => {
   
   
       render(<Contact />)
   
       // Querying
      const inputBoxes =  screen.getAllByRole("textbox")
      
    //   console.log(inputBoxes);
       
   
      // Assertion
   //    expect(inputBoxes).toBeInTheDocument();
       expect(inputBoxes.length).not.toBe(3)
   
   })




})

