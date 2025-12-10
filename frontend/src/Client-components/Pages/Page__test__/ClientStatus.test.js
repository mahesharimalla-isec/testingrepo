import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ClientStatus from "../ClientStatus";
import store from "../../../REDUX_STORE/store";

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <ClientStatus />
    </BrowserRouter>
  </Provider>
);

jest.mock('../../../Context/UserAuthContext', () => ({
    useUserAuth: () => ({
      logout: jest.fn(),
    }),
  }));

  window.scrollTo= jest.fn()

  jest.mock('../../../Config/Firebaseconfig', () => ({
    database: {},
  }));

  jest.mock('firebase/firestore', () => ({
    collection: jest.fn(),
    doc: jest.fn(),
    onSnapshot: jest.fn(()=> jest.fn()),
    where: jest.fn(),
    query:jest.fn(),
    getDocs:jest.fn()


  }));

  jest.mock('firebase/auth', () => ({
    onAuthStateChanged: jest.fn(),
  }));

  describe('Client Status', () => {

    test("render navbar component  ", () => {
      render(router);
      const clientNavbar = screen.getByTestId('clientNavbar');
      expect(clientNavbar).toBeInTheDocument();
    });

    test("render vulnerability table component", () => {
      render(router);
      const Vulnerability = screen.getByTestId("Vulnerability")
      expect(Vulnerability).toBeInTheDocument();
    });

  });
