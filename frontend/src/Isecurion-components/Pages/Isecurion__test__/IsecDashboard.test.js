import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import IsecDashboard from "../IsecDashboard";
import { Provider } from "react-redux";
import store from "../../../REDUX_STORE/store";


jest.mock('../../../Context/UserAuthContext', () => ({
    useUserAuth: () => ({
        logout: jest.fn(),
    }),
}));

const router = <Provider store={store}><BrowserRouter><IsecDashboard /></BrowserRouter></Provider>

describe('isecurion dashboard', () => {

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

        render(<Provider store={store}><BrowserRouter><IsecDashboard inProgressCount={inProgressCount} /></BrowserRouter></Provider>)
        const inprogressCount = screen.getByTestId("inprogress")

        expect(inprogressCount).toBeInTheDocument();
        expect(inprogressCount).toHaveTextContent('0')
    })

     test("render retesting count", () => {

        const retestingCount = 0;

        render(<Provider store={store}><BrowserRouter><IsecDashboard retestingCount={retestingCount} /></BrowserRouter></Provider>)
        const inprogressCount = screen.getByTestId("retesting")

        expect(inprogressCount).toBeInTheDocument();
        expect(inprogressCount).toHaveTextContent('0')
    })

    test("render completed count", () => {

        const completedCount = 0;

        render(<Provider store={store}><BrowserRouter><IsecDashboard completedCount={completedCount} /></BrowserRouter></Provider>)
        const inprogressCount = screen.getByTestId("completed")

        expect(inprogressCount).toBeInTheDocument();
        expect(inprogressCount).toHaveTextContent('0')
    })

    test("render total project count", () => {

        const totalProjectsCount = 0;

        render(<Provider store={store}><BrowserRouter><IsecDashboard totalProjectsCount={totalProjectsCount} /></BrowserRouter></Provider>)
        const inprogressCount = screen.getByTestId("totalprojects")

        expect(inprogressCount).toBeInTheDocument();
        expect(inprogressCount).toHaveTextContent('0')
    })

    test("render IsecurionNavbar in IsecDashboard component", ()=> {

        render(router)
        const isecDashTable= screen.getByTestId('isecNavbar')
        expect(isecDashTable).toBeInTheDocument()
    })

    test("render IsecurionDashTable in IsecDashboard component", ()=> {

        render(router)
        const isecDashTable= screen.getByTestId('isecDashTable')
        expect(isecDashTable).toBeInTheDocument()
    })



})
