import React from "react";
import { BrowserRouter } from "react-router-dom";
import ClientVulner_Table from "../ClientVulner_Table";
import { fireEvent, render, screen, getByRole } from "@testing-library/react";

import { Provider } from "react-redux";
import store from "../../../REDUX_STORE/store";



jest.mock('../../../Context/UserAuthContext', () => ({
    useUserAuth: () => ({
        logout: jest.fn(),
    }),
}));

jest.mock('../../../Config/Firebaseconfig', () => ({
    database: {},
}));

jest.mock('firebase/firestore', () => ({
    collection: jest.fn(),
    doc: jest.fn(),
    onSnapshot: jest.fn(() => jest.fn()),
    where: jest.fn(),
    query: jest.fn(),
    getDocs: jest.fn()

}));

jest.mock('firebase/auth', () => ({
    onAuthStateChanged: jest.fn(),
}));

const router = <Provider store={store}><BrowserRouter>< ClientVulner_Table/></BrowserRouter></Provider>

describe("Client vulnerability table", ()=> {

    test("should render header", ()=> {
        render(router)
        const header= screen.getByText("List of Vulnerabilities")
        expect(header).toBeInTheDocument()
    })

    test('render onclick apply retest button', async () => {
        render(router),
            fireEvent.click(screen.getByText('Apply retest'));
    })

    test('should render table header sl no ', () => {

        render(router)
        const tableheader1= screen.getByText("No.")
        expect(tableheader1).toBeInTheDocument()
    })

    test('should render table header vulnerability ', () => {

        render(router)
        const tableheader2= screen.getByText("Vulnerability")
        expect(tableheader2).toBeInTheDocument()
    })

    test('should render table header severity ', () => {

        render(router)
        const tableheader3= screen.getByText("Severity")
        expect(tableheader3).toBeInTheDocument()
    })

    test('should render table header affected item ', async() => {

        render(router)
        const tableheader4= await screen.findByText("Affected Item")
        expect(tableheader4).toBeInTheDocument()
    })

    test('should render table header recommendations ', () => {

        render(router)
        const tableheader5= screen.getByText("Recommendations")
        expect(tableheader5).toBeInTheDocument()
    })

    test('should render table header comments ', () => {

        render(router)
        const tableheader6= screen.getByText("Comments")
        expect(tableheader6).toBeInTheDocument()
    })

    test('should render table header action ', () => {

        render(router)
        const tableheader7= screen.getByText("Action")
        expect(tableheader7).toBeInTheDocument()
    })

    test("should render are you sure you want to apply retest?", async()=> {
        render(router)
        const addbutton = screen.getByText("Apply retest");
        fireEvent.click(addbutton)

        const popup= await screen.findByText("Are you sure you want to apply retest?")
        expect(popup).toBeInTheDocument()
    })

    test("should render are you sure you want to apply retest?", async()=> {
        render(router)
        const addbutton = screen.getByText("Apply retest");
        fireEvent.click(addbutton)

        const popup= await screen.findByText("Confirm")

        expect(popup).toBeInTheDocument()
    })

    test("should render are you sure you want to apply retest?", async()=> {
        render(router)
        const addbutton = screen.getByText("Apply retest");
        fireEvent.click(addbutton)

        const popup= await screen.findByText("Cancel")
        expect(popup).toBeInTheDocument()
    })

    test("should render are you sure you want to apply retest?", async()=> {
        render(router)
        const addbutton = screen.getByText("Apply retest");
        fireEvent.click(addbutton)

        fireEvent.click(screen.getByText('Cancel'));
    })

    test("should render are you sure you want to apply retest?", async()=> {
        render(router)
        const addbutton = screen.getByText("Apply retest");
        fireEvent.click(addbutton)

        fireEvent.click(screen.getByText('Confirm'));
    })
})
