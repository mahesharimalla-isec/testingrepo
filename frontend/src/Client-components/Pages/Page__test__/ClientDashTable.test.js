import React from "react";
import ClientDashTable from "../ClientDashTable";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../REDUX_STORE/store";
import { act } from "react-dom/test-utils";

jest.mock('../../../Context/UserAuthContext', () => ({
    useUserAuth: () => ({
        logout: jest.fn(),
    }),
}));

beforeEach(() => {
    fetch.resetMocks()
    fetch.mockResponse('[]')
})

const router = <Provider store={store}><BrowserRouter><ClientDashTable /></BrowserRouter></Provider>

describe('Client dashboard table', () => {

    test("render header in the component", () => {
        render(router)
        const header = screen.getByText("Project List")
        expect(header).toBeInTheDocument()
    })

    test("render table sl. no in the component", () => {
        render(router)

        const table = screen.getByText("No.")
        expect(table).toBeInTheDocument()
    })

    test("render table project name in the component", () => {
        render(router)

        const table = screen.getByText("Project Name")
        expect(table).toBeInTheDocument()
    })

    test("render table application type in the component", () => {
        render(router)

        const table = screen.getByText("Application Type")
        expect(table).toBeInTheDocument()
    })

    test("render table Status in the component", () => {
        render(router)

        const table = screen.getByText("Status")
        expect(table).toBeInTheDocument()
    })

})
