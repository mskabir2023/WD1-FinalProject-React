import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { cleanBeforeLogout } from '../services/network';

jest.mock('../services/network', () => ({
    cleanBeforeLogout: jest.fn(),
}));

describe('Navbar', () => {
    test('renders navbar links correctly', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );

        const homeLink = screen.getByText('Home');
        const addProductLink = screen.getByText('Add product');
        const chatLink = screen.getByText('Chat');
        const logoutLink = screen.getByText('Logout');

        expect(homeLink).toBeInTheDocument();
        expect(addProductLink).toBeInTheDocument();
        expect(chatLink).toBeInTheDocument();
        expect(logoutLink).toBeInTheDocument();
    });

    test('handles logout correctly', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );

        const logoutLink = screen.getByText('Logout');
        fireEvent.click(logoutLink);

        expect(cleanBeforeLogout).toHaveBeenCalled();
    });

    // Add more tests for different cases based on your requirements
});