import React from 'react';
import { fireEvent, render, screen, userEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Router } from 'react-router-dom';
import IsecNavbar from "../IsecNavbar"
import { UserAuthContextProvider } from '../../../Context/UserAuthContext';



jest.mock('../../../Context/UserAuthContext', () => ({
    useUserAuth: () => ({
        logout: jest.fn(),
    }),
}));

const router=<BrowserRouter><IsecNavbar /></BrowserRouter>

describe('IsecNavbar', () => {
    test('renders navbar with links', () => {
      render(
        router
      );

      expect(screen.getByAltText('Isecurion Logo')).toBeInTheDocument();
      expect(screen.getByText('Dashboard')).toBeInTheDocument();
      expect(screen.getByText('Add Project')).toBeInTheDocument();
      expect(screen.getByText('Messenger')).toBeInTheDocument();
      expect(screen.getByText('Update Password')).toBeInTheDocument();
      expect(screen.getByText('Logout')).toBeInTheDocument();
    });

    test('Redirects to dashboard page', () => {
        const { getByText } = render(router)

        fireEvent.click(screen.getByAltText('Isecurion Logo'));

        const passwordLink = getByText("Dashboard")
        expect(passwordLink).toHaveAttribute('href', '/isecurion_dash')
        expect(passwordLink).toBeInTheDocument("Dashboard")

      })

    test('Redirects to dashboard page', () => {
        const { getByText } = render(router)

        fireEvent.click(screen.getByText('Dashboard'));

        const passwordLink = getByText("Dashboard")
        expect(passwordLink).toHaveAttribute('href', '/isecurion_dash')
        expect(passwordLink).toBeInTheDocument("Dashboard")

      })

      test('Redirects to add project page', () => {
        const { getByText } = render(router)

        fireEvent.click(screen.getByText('Add Project'));

        const passwordLink = getByText("Add Project")
        expect(passwordLink).toHaveAttribute('href', '/isecurion_dash/addproject')
        expect(passwordLink).toBeInTheDocument("Add Project")

      })

      test('Redirects to messenger page', () => {
        const { getByText } = render(router)

        fireEvent.click(screen.getByText('Messenger'));

        const passwordLink = getByText("Messenger")
        expect(passwordLink).toHaveAttribute('href', '/isecurion_dash/messenger')
        expect(passwordLink).toBeInTheDocument("Messenger")

      })

      test('Redirects to update password page', () => {
        const { getByText } = render(router)
        fireEvent.click(screen.getByText('Update Password'));
        const passwordLink = getByText("Update Password")
        expect(passwordLink).toHaveAttribute('href', '/isecurion_dash/update_pass')
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

  });

