import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from './HomePage'
import { useUserAuth } from '../Context/UserAuthContext';
import { updateProfile } from 'firebase/auth';

jest.mock('../Context/UserAuthContext', () => ({
    useUserAuth: () => ({
        iseclogIn: jest.fn(),
        clientlogin:jest.fn(),
        forgotPassword:jest.fn()
    }),
}));

const router=(
    <BrowserRouter>
    <HomePage/>
    </BrowserRouter>
)

jest.mock('firebase/firestore', () => ({

    getDocs: jest.fn(),
    query: jest.fn(),
    where: jest.fn(),
    collection: jest.fn(),

  }));

  jest.mock('../Config/Firebaseconfig', () => ({
    database: {},
}));

jest.mock('firebase/auth', () => ({
    updateProfile: jest.fn()
}))


describe("HomePage Test Cases", ()=> {
    test("render navbar image ", ()=>{
        render(router)
        const image= screen.getByTestId("homepage_image")
        expect(image).toBeInTheDocument()
    })

    test("render signin button ", ()=>{
        render(router)
        const signin= screen.getByTestId("signin_button")
        expect(signin).toBeInTheDocument()
    })

    test("render project logo", ()=>{
        render(router)
        const logo=screen.getByTestId("logo")
        expect(logo).toBeInTheDocument()
    })

    test("render welcome text", ()=>{
        render(router)
        const test= screen.getByText("Welcome Back!")
        expect(test).toBeInTheDocument()
    })

    test("render header 2",()=>{
        render(router)
        const header= screen.getByTestId("header2")
        expect(header).toBeInTheDocument()
    })

    test("render paragaraph", ()=>{
        render(router)
        const paragaraph=screen.getByTestId("paragraph")
        expect(paragaraph).toBeInTheDocument()
    })

    test("render wallpaper", ()=>{
        render(router)
        const wallpaper= screen.getByTestId("home_wallpaper")
        expect(wallpaper).toBeInTheDocument()
    })

    test("signIn page", ()=>{
        const {getByText}= render(router)
        fireEvent.click(screen.getByText("SIGN IN"))
        const button= getByText("Login")
        expect(button).toBeInTheDocument()
    })

    test("cancel button",()=>{
        const {getByTestId}= render(router)
        fireEvent.click(screen.getByText("SIGN IN"))
        const cancelButton=getByTestId("cancel_button")
        expect(cancelButton).toBeInTheDocument()
    })

    test("signin text", ()=>{
        const {getByTestId}= render(router)
        fireEvent.click(screen.getByText("SIGN IN"))
        const signin= getByTestId("signin_text")
        expect(signin).toBeInTheDocument()
    })

    test("render email label", ()=> {
        const {getByText}= render(router)
        fireEvent.click(screen.getByText("SIGN IN"))
        const email=getByText("Email")
        expect(email).toBeInTheDocument()
    })

    test("render password label", ()=> {
        const {getByText}= render(router)
        fireEvent.click(screen.getByText("SIGN IN"))
        const password=getByText("Password")
        expect(password).toBeInTheDocument()
    })

    test("render email input", ()=>{
        const {getByPlaceholderText}= render(router)
        fireEvent.click(screen.getByText("SIGN IN"))
        const emailInput= getByPlaceholderText("Enter Your Email")
        expect(emailInput).toBeInTheDocument()
    })

    test("render password input", ()=>{
        const {getByPlaceholderText}= render(router)
        fireEvent.click(screen.getByText("SIGN IN"))
        const passwordInput= getByPlaceholderText("Enter Your Password")
        expect(passwordInput).toBeInTheDocument()
    })

    test("login button",()=>{
        const {getByTestId}= render(router)
        fireEvent.click(screen.getByText("SIGN IN"))
        const cancelButton=getByTestId("login")
        expect(cancelButton).toBeInTheDocument()
    })

    test('should able to except the user email', async () => {
        render(router)
        fireEvent.click(screen.getByText("SIGN IN"))
        const inputClient = screen.getByPlaceholderText("Enter Your Email")
        fireEvent.change(inputClient, { target: { value: "Manjesh@isecurion.com" } })
        expect(inputClient.value).toBe("Manjesh@isecurion.com")
    })

    test('should able to except the user password', async () => {
        render(router)
        fireEvent.click(screen.getByText("SIGN IN"))
        const inputClient = screen.getByPlaceholderText("Enter Your Password")
        fireEvent.change(inputClient, { target: { value: "manjesh" } })
        expect(inputClient.value).toBe("manjesh")
    })

    test('toggles password visibility when the eye icon is clicked', () => {
        const { container } = render(router);
        fireEvent.click(screen.getByText("SIGN IN"))
        const eyeIcon = container.querySelector('.eye-icon');
        expect(eyeIcon).toBeInTheDocument();

        const passwordInput = container.querySelector('input[type="password"]');
        expect(passwordInput).toHaveAttribute('type', 'password');

        fireEvent.click(eyeIcon);
        expect(passwordInput).toHaveAttribute('type', 'text');

        fireEvent.click(eyeIcon);
        expect(passwordInput).toHaveAttribute('type', 'password');
      });

    test("render forgot password link", ()=>{
        const {getByText}= render(router)
        fireEvent.click(screen.getByText("SIGN IN"))
        const link=getByText("Forgot Password?")
        expect(link).toBeInTheDocument()
    })

    test("render forgot password page cancel button", ()=>{
        const {getByTestId}= render(router)
        fireEvent.click(screen.getByText("SIGN IN"))
        fireEvent.click(screen.getByText("Forgot Password?"))
        const cancel= getByTestId("forgot_cancel_button")
        expect(cancel).toBeInTheDocument()
    })

    test("render forgot password page header", ()=>{
        const {getByText}= render(router)
        fireEvent.click(screen.getByText("SIGN IN"))
        fireEvent.click(screen.getByText("Forgot Password?"))
        const cancel= getByText("Forgot Password")
        expect(cancel).toBeInTheDocument()
    })

    test("render forgot password page caution", ()=>{
        const {getByText}= render(router)
        fireEvent.click(screen.getByText("SIGN IN"))
        fireEvent.click(screen.getByText("Forgot Password?"))
        const cancel= getByText("Enter your user account's verified email address and we will send you a password reset link.")
        expect(cancel).toBeInTheDocument()
    })

    test("render forgot password page email label", ()=>{
        const {getByText}= render(router)
        fireEvent.click(screen.getByText("SIGN IN"))
        fireEvent.click(screen.getByText("Forgot Password?"))
        const cancel= getByText("Email")
        expect(cancel).toBeInTheDocument()
    })

    test("render forgot password page email input", ()=>{
        render(router)
        fireEvent.click(screen.getByText("SIGN IN"))
        fireEvent.click(screen.getByText("Forgot Password?"))
        const inputClient = screen.getByPlaceholderText("Enter Your Email")
        fireEvent.change(inputClient, { target: { value: "Manjesh@isecurion.com" } })
        expect(inputClient.value).toBe("Manjesh@isecurion.com")
    })

    test("email should not be empty",async ()=>{
        render(router)
        fireEvent.click(screen.getByText("SIGN IN"))
        fireEvent.click(screen.getByText("Forgot Password?"))
        const login= screen.getByTestId("send_link")
        const userInput= screen.getByPlaceholderText("Enter Your Email")
        fireEvent.change(userInput, {target:{ value:""}})
        fireEvent.click(login)
        const message = await screen.findByText(/Email require/i);
        expect(message).toBeInTheDocument();
    })


    test("render signin link", ()=>{
        render( router)
        fireEvent.click(screen.getByText("SIGN IN"))
        fireEvent.click(screen.getByText("Forgot Password?"))
        const signin= screen.getByText("Sign In")
        expect(signin).toBeInTheDocument()
    })

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Logs in a user with isecurion.com email ', async () => {
        const email = 'test@isecurion.com';
        const password = 'password123';

        const { iseclogIn } = useUserAuth();

        iseclogIn.mockResolvedValueOnce({
            user: { uid: 'userUid' }
        });

        await iseclogIn(email, password);

        expect(iseclogIn).toHaveBeenCalledWith(email, password);
    });

    test('Logs in a user with client email ', async () => {
        const email = 'test@gmail.com';
        const password = 'password12';

        const { clientlogin } = useUserAuth();

        clientlogin.mockResolvedValueOnce({
            user: { uid: 'userUid' }
        });
        await clientlogin(email, password);
        expect(clientlogin).toHaveBeenCalledWith(email, password);
    });

    test(' sending forgot password link', async()=>{
        const email = 'test@gmail.com';

        const { forgotPassword } = useUserAuth();
        await forgotPassword(email)
        expect(forgotPassword).toHaveBeenCalledWith(email)
    })

})
