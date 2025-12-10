import React from "react";
import Error from "./Error"
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const router=(
    <BrowserRouter>
    <Error/>
    </BrowserRouter>
)

describe("Error page",()=>{
    test("render emoji", ()=>{
        render(router)
        const errorEmoji=screen.getByTestId('sad')
        expect(errorEmoji).toBeInTheDocument()
    })

    test("render error code",()=>{
        render(router)
        const errorcode=screen.getByText("404")
        expect(errorcode).toBeInTheDocument()
    })

    test("render error header", ()=>{
        render(router)
        const errorHeader= screen.getByText("Page Not Found")
        expect(errorHeader).toBeInTheDocument()
    })

    test("render error message", ()=>{
        render(router)
        const errorMessage=screen.getByText("The resource requested could not be found on this server")
        expect(errorMessage).toBeInTheDocument()
    })

    test("render back button", ()=>{
        render(router)
        const backbutton=screen.getByRole("button")
        expect(backbutton).toBeInTheDocument()
    })
})
