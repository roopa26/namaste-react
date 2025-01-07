import {fireEvent, render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import appStore from '../../utils/appStore';
import { Provider } from 'react-redux';
import React from 'react';
import Header from '../Header';
import '@testing-library/jest-dom';

describe("test for header component", () => {
    it("should load login button",() => {
        render(<BrowserRouter>
            <Provider store = {appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>)

        const loginBtn = screen.getByRole('button',{name:"Login"});

        expect(loginBtn).toBeInTheDocument();
    });
    it("should show logout button on click of login",() => {
        render(<BrowserRouter>
            <Provider store = {appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>)

        const loginBtn = screen.getByRole('button',{name:"Login"});
        fireEvent.click(loginBtn);
        const logoutBtn = screen.getByRole('button',{name:"Logout"});
        expect(logoutBtn).toBeInTheDocument();
    })
})