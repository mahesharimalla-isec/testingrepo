import { fireEvent, getByPlaceholderText, render, screen } from "@testing-library/react";
import React from "react";
import AddProject from '../AddProject'
import { BrowserRouter } from "react-router-dom";

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
    onSnapshot: jest.fn(() => jest.fn()),
    where: jest.fn(),
    query: jest.fn(),
    getDocs: jest.fn()

}));

jest.mock('firebase/auth', () => ({
    onAuthStateChanged: jest.fn(),
}));

window.scrollTo = jest.fn();

const iseclogInMock = jest.fn();
iseclogInMock.mockResolvedValue(true);


const router = <BrowserRouter><AddProject /></BrowserRouter>

describe("Add Project", () => {

    test("render header", () => {

        render(<BrowserRouter><AddProject /></BrowserRouter>)

        const header = screen.getByTestId("Add_Project")
        expect(header).toBeInTheDocument()
    })

    test("render client name label", () => {

        render(router)

        const label1 = screen.getByText("Client name")
        expect(label1).toBeInTheDocument()
    })

    test("render project name label", () => {

        render(router)
        const label2 = screen.getByText("Project name")
        expect(label2).toBeInTheDocument()
    })

    test("render Application type label", () => {

        render(router)
        const label3 = screen.getByText("Application type")
        expect(label3).toBeInTheDocument()
    })

    test("render test start date label", () => {

        render(router)
        const label4 = screen.getByText("Test start date")
        expect(label4).toBeInTheDocument()
    })


    test("render test end date label", () => {
        render(router)
        const label5 = screen.getByText("Test end date")
        expect(label5).toBeInTheDocument()
    })

    test("render status label", () => {

        render(router)
        const label6 = screen.getByText("Status")
        expect(label6).toBeInTheDocument()
    })

    test('render onclick Add project event', async () => {
        render(router)
            fireEvent.click(screen.getByRole('button'));
    })

    test('render client name input', () => {
        render(router)
        const clientinput = screen.getByPlaceholderText("Enter client name")
        expect(clientinput).toBeInTheDocument()
    })

    test('render project name input', () => {
        render(router)
        const projectinput = screen.getByPlaceholderText("Enter project name")
        expect(projectinput).toBeInTheDocument()
    })

    test('should update applicationType when selecting an option', () => {
        const { getByTestId, getByText } = render(router);

        const labelElement = getByText('Application type');
        const selectElement = getByText('Application type').nextSibling;

        fireEvent.change(selectElement, { target: { value: 'API' } });

        expect(selectElement.value).toBe('API');
        expect(labelElement).toBeInTheDocument();

        const selectOption = getByTestId('Select');
        expect(selectOption).toBeInTheDocument();
    });

    test('should update status when selecting an option', () => {
        const { getByTestId, getByText } = render(router);

        const labelElement = getByText('Status');
        const selectElement = getByText('Status').nextSibling;

        fireEvent.change(selectElement, { target: { value: 'Inprogress' } });

        expect(selectElement.value).toBe('Inprogress');
        expect(labelElement).toBeInTheDocument();

        const selectOption = getByTestId('Selectstatus');
        expect(selectOption).toBeInTheDocument();
    });


    test('should update test start date when changing the date input', () => {
        const { getByTestId } = render(router);

        const dateInput = getByTestId('input-date');

        fireEvent.input(dateInput, { target: { value: '2023-11-10' } });
        expect(dateInput.value).toBe('2023-11-10');
    });

    test('should update test end date when changing the date input', () => {
        const { getByTestId } = render(router);

        const dateInput = getByTestId('input-enddate');

        fireEvent.input(dateInput, { target: { value: '2023-11-10' } });
        expect(dateInput.value).toBe('2023-11-10');
    });

    test('should able to except the client input', async () => {
        render(router)

        const inputClient = screen.getByPlaceholderText("Enter client name")
        fireEvent.change(inputClient, { target: { value: "Manjesh" } })
        expect(inputClient.value).toBe("Manjesh")
    })

    test('should able to except the project name input', async () => {
        render(router)
        const inputClient = screen.getByPlaceholderText("Enter project name")
        fireEvent.change(inputClient, { target: { value: "Pharmacy" } })
        expect(inputClient.value).toBe("Pharmacy")
    })

    test("client name should not be empty", async () => {
        render(router);

        const addbutton = screen.getByRole("button");
        const inputClientNode = screen.getByPlaceholderText("Enter client name")

        fireEvent.change(inputClientNode, { target: { value: "" } });
        fireEvent.click(addbutton);

        const message = await screen.findByText(/Client name is required/i);
        expect(message).toBeInTheDocument();
    });

    test("project name should not be empty", async () => {
        render(router);

        const addbutton = screen.getByRole("button");
        const inputClientNode = screen.getByPlaceholderText("Enter client name")
        const inputprojectNode = screen.getByPlaceholderText("Enter project name")
        fireEvent.change(inputClientNode, { target: { value: "manjesh" } });
        fireEvent.change(inputprojectNode, { target: { value: "" } });
        fireEvent.click(addbutton);

        const message = await screen.findByText(/Project name is required/i);
        expect(message).toBeInTheDocument();
    });

    test("application type should not be empty", async () => {
        render(router);

        const addbutton = screen.getByRole("button");
        const inputClientNode = screen.getByPlaceholderText("Enter client name")
        const inputprojectNode = screen.getByPlaceholderText("Enter project name")

        fireEvent.change(inputClientNode, { target: { value: "manjesh" } });
        fireEvent.change(inputprojectNode, { target: { value: "wefdgrgeg" } });

        fireEvent.click(addbutton);

        const message = await screen.findByText(/Application Type is required/i);
        expect(message).toBeInTheDocument();
    });

    test("test start date should not be empty", async () => {
        render(router);
        const addbutton = screen.getByRole("button");
        const inputClientNode = screen.getByPlaceholderText("Enter client name")
        const inputprojectNode = screen.getByPlaceholderText("Enter project name")
        const selectElement = screen.getByText('Application type').nextSibling;

        fireEvent.change(selectElement, { target: { value: 'API' } });

        fireEvent.change(inputClientNode, { target: { value: "manjesh" } });
        fireEvent.change(inputprojectNode, { target: { value: "wefdgrgeg" } });
        fireEvent.click(addbutton);

        const message = await screen.findByText(/Test start date is required/i);
        expect(message).toBeInTheDocument();
    });

    test(" test end date should not be empty", async () => {
        render(router);
        const addbutton = screen.getByRole("button");
        const inputClientNode = screen.getByPlaceholderText("Enter client name")
        const inputprojectNode = screen.getByPlaceholderText("Enter project name")
        const selectElement = screen.getByText('Application type').nextSibling;
        const dateInput = screen.getByTestId('input-date');

        fireEvent.input(dateInput, { target: { value: '2023-11-10' } });
        fireEvent.change(selectElement, { target: { value: 'API' } });

        fireEvent.change(inputClientNode, { target: { value: "manjesh" } });
        fireEvent.change(inputprojectNode, { target: { value: "wefdgrgeg" } });
        fireEvent.click(addbutton);

        const message = await screen.findByText(/Test end date is required/i);
        expect(message).toBeInTheDocument();
    });

    test("status should not be empty", async () => {
        render(router);
        const addbutton = screen.getByRole("button");
        const inputClientNode = screen.getByPlaceholderText("Enter client name")
        const inputprojectNode = screen.getByPlaceholderText("Enter project name")
        const selectElement = screen.getByText('Application type').nextSibling;
        const dateInput = screen.getByTestId('input-date');
        const dateInputend = screen.getByTestId('input-enddate');

        fireEvent.input(dateInputend, { target: { value: '2023-11-10' } });

        fireEvent.input(dateInput, { target: { value: '2023-11-10' } });
        fireEvent.change(selectElement, { target: { value: 'API' } });

        fireEvent.change(inputClientNode, { target: { value: "manjesh" } });
        fireEvent.change(inputprojectNode, { target: { value: "wefdgrgeg" } });
        fireEvent.click(addbutton);

        const message = await screen.findByText(/Project status is required/i);
        expect(message).toBeInTheDocument();
    });

    test("email should not be empty", async () => {
        render(router);
        const addbutton = screen.getByRole("button");
        const inputClientNode = screen.getByPlaceholderText("Enter client name")
        const inputprojectNode = screen.getByPlaceholderText("Enter project name")
        const selectElement = screen.getByText('Application type').nextSibling;
        const dateInput = screen.getByTestId('input-date');
        const dateInputend = screen.getByTestId('input-enddate');
        const dateStatus = screen.getByTestId('Selectstatus');

        fireEvent.input(dateInputend, { target: { value: '2023-11-10' } });

        fireEvent.input(dateInput, { target: { value: '2023-11-10' } });
        fireEvent.change(selectElement, { target: { value: 'API' } });

        fireEvent.change(inputClientNode, { target: { value: "manjesh" } });
        fireEvent.change(inputprojectNode, { target: { value: "wefdgrgeg" } });
        fireEvent.change(dateStatus, {target:{value:"Inprogress"}})
        fireEvent.click(addbutton);

        const message = await screen.findByText(/Client email is required/i);
        expect(message).toBeInTheDocument();
    });


})
