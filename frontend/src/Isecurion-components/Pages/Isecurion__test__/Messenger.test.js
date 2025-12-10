import React from "react";
import { BrowserRouter } from "react-router-dom";
import Messenger from '../Messenger'
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
        <Messenger />
      </BrowserRouter>
    </Provider>
  );

  jest.mock('../../../Config/Firebaseconfig', () => ({
    database: {},
  }));

  jest.mock('firebase/firestore', () => ({
    collection: jest.fn(),
    doc: jest.fn(),
    onSnapshot: jest.fn(()=> jest.fn()),
    where: jest.fn(),
    query:jest.fn(),
  }));

  jest.mock('firebase/auth', () => ({
    onAuthStateChanged: jest.fn(),
  }));

describe ('Messenger page', ()=>{

    test("render navbar component  ", () => {
        render(router);
        const isecMessenger = screen.getByTestId('IsecurionNavbar');
        expect(isecMessenger).toBeInTheDocument();
      });

    test("render username heading",()=>{
        render(router)
        const msgUsername= screen.getByTestId("username")
        expect(msgUsername).toBeInTheDocument()
      })

    test("render search button", ()=>{
        render(router)
        const messengerSearch= screen.getByTestId("searchButton")
        expect(messengerSearch).toBeInTheDocument()
    })

    test("render input", ()=>{
        render(router)
        const messengerInput= screen.getByTestId("searchInput")
        expect(messengerInput).toBeInTheDocument()
    })

    test("render text",()=>{
        render(router)
        const messenderText= screen.getByText("All chats")
        expect(messenderText).toBeInTheDocument()
    })
})
