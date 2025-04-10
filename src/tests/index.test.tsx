import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { BrowserRouter as Router } from 'react-router-dom';
import { initializeIcons } from '@fluentui/react';

// Mock initialization functions
jest.mock('@fluentui/react', () => ({
    initializeIcons: jest.fn(),
}));

jest.mock('../reportWebVitals', () => jest.fn());

// Mock CSS imports
jest.mock('../index.css', () => jest.fn());
jest.mock('../Fabric.css', () => jest.fn());
jest.mock('bootstrap/dist/css/bootstrap.min.css', () => jest.fn());

describe('Root Application', () => {
    beforeAll(() => {
        initializeIcons();
    });

    it('renders App without crashing', () => {
        const { getByText } = render(
            <React.StrictMode>
                <Router>
                    <App />
                </Router>
            </React.StrictMode>
        );

        // Add assertion based on the content rendered by App component
        // Update `Welcome` to some text you know appears in your App
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByText(/EXPAND YOUR SOCIAL CIRCLE/i)).toBeInTheDocument();
    });
});
