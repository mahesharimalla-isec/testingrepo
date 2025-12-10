import React from "react";
import ClientNavbar from "../ClientNavbar"
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";


jest.mock('../../../Context/UserAuthContext', () => ({
    useUserAuth: () => ({
        clientLogout: jest.fn(),
    }),
}));

const router = <BrowserRouter><ClientNavbar /></BrowserRouter>

describe('client navbar', ()=>{

  test('render image', ()=>{
    render(router)
    const image= screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })

  test('renders navbar with links', ()=>{
    render(router)

      expect(screen.getByText('Dashboard')).toBeInTheDocument();
      expect(screen.getByText('Messenger')).toBeInTheDocument();
      expect(screen.getByText('Update Password')).toBeInTheDocument();
      expect(screen.getByText('Logout')).toBeInTheDocument();
  })

  test('redirects to dashboard page', ()=>{
    const { getByText } = render(router)
    const passwordLink = getByText("Dashboard")
    expect(passwordLink).toHaveAttribute('href', '/client_dash')
    expect(passwordLink).toBeInTheDocument("Dashboard")
  })

  test('redirects to messenger page', ()=>{
    const { getByText } = render(router)

        fireEvent.click(screen.getByText('Messenger'));

        const passwordLink = getByText("Messenger")
        expect(passwordLink).toHaveAttribute('href', '/client_dash/messenger')
        expect(passwordLink).toBeInTheDocument("Messenger")
  })

  test('redirects to update password page',()=>{
    const { getByText } = render(router)
    fireEvent.click(screen.getByText('Update Password'));
    const passwordLink = getByText("Update Password")
    expect(passwordLink).toHaveAttribute('href', '/client_dash/client_password')
    expect(passwordLink).toBeInTheDocument("Update Password")
  })

  test("render logout link", ()=>{
    render(router)

    const logout=screen.getByText('Logout')
    expect(logout).toBeInTheDocument()
  })

  test('Logout content confirm button', () => {
    const { getByText } = render(router)

    fireEvent.click(screen.getByText('Logout'));
    const passwordLink = getByText("Confirm")
    expect(passwordLink).toBeInTheDocument()
  })

  test('Logout content cancel button', () => {
    const { getByText } = render(router)
    fireEvent.click(screen.getByText('Logout'));
    const passwordLink = getByText("Cancel")
    expect(passwordLink).toBeInTheDocument()
  })

  test('Logout content paragraph', () => {
    const { getByText } = render(router)
    fireEvent.click(screen.getByText('Logout'));
    const passwordLink = getByText("Are you sure you want to logout?")
    expect(passwordLink).toBeInTheDocument()
  })

})


