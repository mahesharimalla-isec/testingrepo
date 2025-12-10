import React from "react";
import { BrowserRouter } from "react-router-dom";
import ClientMessenger from '../Client_Messenger'
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../REDUX_STORE/store";

jest.mock('../../../Context/UserAuthContext', () => ({
    useUserAuth: () => ({
        logout: jest.fn(),
    }),
}));

const router = (
    <Provider store={store}>
        <BrowserRouter>
            <ClientMessenger />
        </BrowserRouter>
    </Provider>
);

jest.mock('../../../Config/Firebaseconfig', () => ({
    database: {},
}));

jest.mock('firebase/firestore', () => ({
    collection: jest.fn(),
    doc: jest.fn(),
    onSnapshot: jest.fn(() => jest.fn()),
    where: jest.fn(),
    query: jest.fn(),
}));

jest.mock('firebase/auth', () => ({
    onAuthStateChanged: jest.fn(),
}));

describe("client messenger", () => {
    test("render navbar component", () => {
        render(router)
        const clientMessenger = screen.getByTestId('clientNavbar');
        expect(clientMessenger).toBeInTheDocument();
    })

    test("render h4", () => {
        render(router)
        const clientMessengerH4 = screen.getByText('I')
        expect(clientMessengerH4).toBeInTheDocument()
    })

    test("render Isecurion", () => {
        render(router)
        const clientMessengerH1 = screen.getByText('ISECURION')
        expect(clientMessengerH1).toBeInTheDocument()
    })

    test("render input", () => {
        render(router)
        const clientmessengerInput = screen.getByTestId("textarea")
        expect(clientmessengerInput).toBeInTheDocument()
    })
})
