import React from 'react'; // Required for JSX
import {render, screen } from '@testing-library/react'; // Testing utilities
import '@testing-library/jest-dom';
import Contact from "../Contact";

describe("contact related test cases", () => {
    test("contact to be present in DOM",() => {
        render(<Contact/>)
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    })
    
    test("submit button should be in the dom", () => {
        render(<Contact/>);
        var button = screen.getByText('Submit');
        expect(button).toBeInTheDocument()
    })
    
    test("input with placeholdername should be in the dom", () => {
        render(<Contact/>);
        var inputName = screen.getByPlaceholderText('Name');
        expect(inputName).toBeInTheDocument()
    })
});