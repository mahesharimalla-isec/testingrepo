import React from "react";
import { BrowserRouter } from "react-router-dom";
import ViewAction from "../ViewAction";
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

window.scrollTo= jest.fn()

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



const router = <Provider store={store}><BrowserRouter>< ViewAction/></BrowserRouter></Provider>

describe("View Action", ()=> {

    test("render navbar component  ", () => {
        render(router);
        const clientnavbar = screen.getByTestId('clientnavbar');
        expect(clientnavbar).toBeInTheDocument();
      });

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

    test('should render table header retest status ', () => {

        render(router)
        const tableheader5= screen.getByText("Retest Status")
        expect(tableheader5).toBeInTheDocument()
    })

    test("should render header", ()=> {
        render(router)
        const header=screen.getByText("Proof of Concept")
        expect(header).toBeInTheDocument()
    })


})
