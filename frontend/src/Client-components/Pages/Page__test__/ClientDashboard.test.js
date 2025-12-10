import React from "react";

import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../REDUX_STORE/store";
import ClientDashboard from "../ClientDashboard";


jest.mock('../../../Context/UserAuthContext', () => ({
    useUserAuth: () => ({
        clientLogout: jest.fn(),
    }),
}));

window.scrollTo=jest.fn()

const router = <Provider store={store}><BrowserRouter><ClientDashboard /></BrowserRouter></Provider>

describe('Client Dashboard', ()=> {
    test("render inprogress text", () => {
        render(router)
        const inprogress = screen.getByText("Inprogress")
        expect(inprogress).toBeInTheDocument()
    })

    test("render retesting text", () => {
        render(router)
        const retesting = screen.getByText("Retesting")
        expect(retesting).toBeInTheDocument()
    })

    test("render completed text", () => {
        render(router)
        const completed = screen.getByText("Completed")
        expect(completed).toBeInTheDocument()
    })

    test("render total projects text", () => {
        render(router)
        const total = screen.getByText("Total Projects")
        expect(total).toBeInTheDocument()
    })

    test("render inprogress count", () => {

        const inProgressCount = 0;

        render(<Provider store={store}><BrowserRouter><ClientDashboard inProgressCount={inProgressCount} /></BrowserRouter></Provider>)
        const inprogressCount = screen.getByTestId("inprogress")

        expect(inprogressCount).toBeInTheDocument();
        expect(inprogressCount).toHaveTextContent('0')
    })

     test("render retesting count", () => {

        const retestingCount = 0;

        render(<Provider store={store}><BrowserRouter><ClientDashboard retestingCount={retestingCount} /></BrowserRouter></Provider>)
        const inprogressCount = screen.getByTestId("retesting")

        expect(inprogressCount).toBeInTheDocument();
        expect(inprogressCount).toHaveTextContent('0')
    })

    test("render completed count", () => {

        const completedCount = 0;

        render(<Provider store={store}><BrowserRouter><ClientDashboard completedCount={completedCount} /></BrowserRouter></Provider>)
        const inprogressCount = screen.getByTestId("completed")

        expect(inprogressCount).toBeInTheDocument();
        expect(inprogressCount).toHaveTextContent('0')
    })

    test("render total project count", () => {

        const totalProjectsCount = 0;

        render(<Provider store={store}><BrowserRouter><ClientDashboard totalProjectsCount={totalProjectsCount} /></BrowserRouter></Provider>)
        const inprogressCount = screen.getByTestId("totalprojects")

        expect(inprogressCount).toBeInTheDocument();
        expect(inprogressCount).toHaveTextContent('0')
    })

    test("render clientDashTable in clientDashboard component", ()=> {

        render(router)
        const clientDashTable= screen.getByTestId('clientDashTable')
        expect(clientDashTable).toBeInTheDocument()
    })

    test("render ClientNavbar in clientDashboard component", ()=> {

        render(router)
        const clientDashTable= screen.getByTestId('clientNavbar')
        expect(clientDashTable).toBeInTheDocument()
    })


})
