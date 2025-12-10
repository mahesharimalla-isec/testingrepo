import React from "react";
import { BrowserRouter } from "react-router-dom";
import UpdatePassword from "../UpdatePassword";
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock('../../../Context/UserAuthContext', () => ({
  useUserAuth: () => ({
    logout: jest.fn(),
  }),
}));

window.scrollTo= jest.fn()



const router = <BrowserRouter><UpdatePassword /></BrowserRouter>

describe('Update password', () => {

  test('should render header', () => {
    render(router)
    const header = screen.getByTestId("UpdatePassword")
    expect(header).toBeInTheDocument()
  })

  test('should render navbar component', () => {
    render(router)
    const headerbar = screen.getByTestId("passnavbar")
    expect(headerbar).toBeInTheDocument()
  })

  test('should render old password label', () => {
    render(router)
    const label1 = screen.getByText("Old Password")
    expect(label1).toBeInTheDocument()
  })

  test('should render new password label', () => {
    render(router)
    const label2 = screen.getByText("New Password")
    expect(label2).toBeInTheDocument()
  })

  test('should render confirm password label', () => {
    render(router)
    const label3 = screen.getByText("Confirm Password")
    expect(label3).toBeInTheDocument()
  })

  test('should render old password input', () => {
    render(router)
    const input1 = screen.getByPlaceholderText("Enter Your Current Password")
    expect(input1).toBeInTheDocument()
  })

  test('should render new password input', () => {
    render(router)
    const input2 = screen.getByPlaceholderText("Enter Your New Password")
    expect(input2).toBeInTheDocument()
  })

  test('should render confirm password input', () => {
    render(router)
    const input2 = screen.getByPlaceholderText("Re-Enter Your New Password")
    expect(input2).toBeInTheDocument()
  })

  test('render onclick update password event', async () => {
    render(router),
      fireEvent.click(screen.getByTestId("passnavbar"))
  })

  test('toggles password visibility when the eye icon is clicked', () => {
    const { container } = render(router);

    const eyeIcon = container.querySelector('.update_eye-icon');
    expect(eyeIcon).toBeInTheDocument();

    const passwordInput = container.querySelector('input[type="password"]');
    expect(passwordInput).toHaveAttribute('type', 'password');

    fireEvent.click(eyeIcon);
    expect(passwordInput).toHaveAttribute('type', 'text');
    fireEvent.click(eyeIcon);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  test('should able to except the old password input', async () => {
    render(router)
    const inputPassword = screen.getByPlaceholderText("Enter Your Current Password")
    fireEvent.change(inputPassword, { target: { value: "Password1!" } })
    expect(inputPassword.value).toBe("Password1!")
  })

  test('should able to except the new password input', async () => {
    render(router)
    const inputPassword = screen.getByPlaceholderText("Enter Your New Password")
    fireEvent.change(inputPassword, { target: { value: "Password1!" } })
    expect(inputPassword.value).toBe("Password1!")
  })

  test('should able to except the confim password input', async () => {
    render(router)
    const inputPassword = screen.getByPlaceholderText("Re-Enter Your New Password")
    fireEvent.change(inputPassword, { target: { value: "Password1!" } })
    expect(inputPassword.value).toBe("Password1!")
  })

  test("password minimum character", () => {
    render(router)
    const header = screen.getByText(/Password should be minimum of 6 character/i)
    expect(header).toBeInTheDocument()
  })

  test("password should special include character", () => {
    render(router)
    const header = screen.getByText(/Password should include at least one special character/i)
    expect(header).toBeInTheDocument()
  })

  test("password should include alphabet character", () => {
    render(router)
    const header = screen.getByText(/Password should include at least one alphabet character/i)
    expect(header).toBeInTheDocument()
  })

  test("old password should not be empty", async () => {
    render(router)
    const updateButton = screen.getByRole("button")
    const oldPassword = screen.getByPlaceholderText("Enter Your Current Password")
    fireEvent.change(oldPassword, { target: { value: '' } })

    fireEvent.click(updateButton)
    const message = await screen.findByText('Enter your old password!')
    expect(message).toBeInTheDocument()
  })

  test("new password should not be empty", async () => {
    render(router)
    const updateButton = screen.getByRole("button")
    const oldPassword = screen.getByPlaceholderText("Enter Your Current Password")
    const newPassword = screen.getByPlaceholderText("Enter Your New Password")
    fireEvent.change(oldPassword, { target: { value: 'manjesh123!' } })
    fireEvent.change(newPassword, { target: { value: '' } })

    fireEvent.click(updateButton)
    const message = await screen.findByText('Enter your new password!')
    expect(message).toBeInTheDocument()
  })

  test("confirm password should not be empty", async () => {
    render(router)
    const updateButton = screen.getByRole("button")
    const oldPassword = screen.getByPlaceholderText("Enter Your Current Password")
    const newPassword = screen.getByPlaceholderText("Enter Your New Password")
    const confirmPassword = screen.getByPlaceholderText("Re-Enter Your New Password")
    fireEvent.change(oldPassword, { target: { value: 'manjesh123!' } })
    fireEvent.change(newPassword, { target: { value: 'manjesh123@' } })
    fireEvent.change(confirmPassword, { target: { value: '' } })

    fireEvent.click(updateButton)
    const message = await screen.findByText('Confirm your password!')
    expect(message).toBeInTheDocument()
  })

  test("new password should include at least one special character", async () => {
    render(router)
    const updateButton = screen.getByRole("button")
    const oldPassword = screen.getByPlaceholderText("Enter Your Current Password")
    const newPassword = screen.getByPlaceholderText("Enter Your New Password")

    fireEvent.change(oldPassword, { target: { value: 'manjesh123!' } })
    fireEvent.change(newPassword, { target: { value: 'manjeshku' } })


    fireEvent.click(updateButton)
    const message = await screen.findByText('Password should include at least one special character')
    expect(message).toBeInTheDocument()
  })

  test("new password should include at least one alphabet character", async () => {
    render(router)
    const updateButton = screen.getByRole("button")
    const oldPassword = screen.getByPlaceholderText("Enter Your Current Password")
    const newPassword = screen.getByPlaceholderText("Enter Your New Password")

    fireEvent.change(oldPassword, { target: { value: 'manjesh123!' } })
    fireEvent.change(newPassword, { target: { value: '123123@12' } })


    fireEvent.click(updateButton)
    const message = await screen.findByText('Password should include at least one alphabet character')
    expect(message).toBeInTheDocument()
  })

})
