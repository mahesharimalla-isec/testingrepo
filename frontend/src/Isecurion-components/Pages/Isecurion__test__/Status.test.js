import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Status from "../Status";
import store from "../../../REDUX_STORE/store";
import { onAuthStateChanged } from 'firebase/auth';

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <Status />
    </BrowserRouter>
  </Provider>
);

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
  onSnapshot: jest.fn(()=> jest.fn()),
  where: jest.fn(),
  query:jest.fn(),
}));

jest.mock('firebase/auth', () => ({
  onAuthStateChanged: jest.fn(),
}));

window.scrollTo = jest.fn();

describe('Status page', () => {

  test("render navbar component  ", () => {
    render(router);
    const isecDashTable = screen.getByTestId('IsecurionNavbar');
    expect(isecDashTable).toBeInTheDocument();
  });

  test("render vulnerability table component", () => {
    render(router);
    const isecDashTable = screen.getByTestId("Isecurionvulnerability")
    expect(isecDashTable).toBeInTheDocument();
  });

});
