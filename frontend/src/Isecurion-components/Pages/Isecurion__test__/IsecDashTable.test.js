import React from "react";
import IsecDashTable from "../IsecDashTable";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../REDUX_STORE/store";



jest.mock('../../../Context/UserAuthContext', () => ({
  useUserAuth: () => ({
    logout: jest.fn(),
  }),
}));



window.scrollTo = jest.fn();

// jest.mock('../IsecDashTable',()=> ({
//   ...jest.requireActual('../IsecDashTable'),
//   fetchProjects: jest.fn(()=> false)
// }))


const router = <Provider store={store}><BrowserRouter><IsecDashTable /></BrowserRouter></Provider>

describe('IsecDashTable', () => {

  test("render header in the component", () => {
    render(router)

    const header = screen.getByText("Project List")
    expect(header).toBeInTheDocument()
  })


  test("render search input",()=>{
    render(router)
    const input= screen.getByTestId("search-input")
    expect(input).toBeInTheDocument()
  })

  test("render table sl. no in the component", () => {
    render(router)

    const table = screen.getByText("No.")
    expect(table).toBeInTheDocument()
  })

  test("render table client name in the component", () => {
    render(router)

    const table = screen.getByText("Client")
    expect(table).toBeInTheDocument()
  })

  test("render table project name in the component", () => {
    render(router)

    const table = screen.getByText("Project Name")
    expect(table).toBeInTheDocument()
  })

  test("render table application type in the component", () => {
    render(router)

    const table = screen.getByText("Application")
    expect(table).toBeInTheDocument()
  })

  test("render table Status in the component", () => {
    render(router)

    const table = screen.getByText("Status")
    expect(table).toBeInTheDocument()
  })



})




