import React from 'react';
import { render } from '@testing-library/react';
import Input from './Input';

describe('test component "Input"', () => {
    it('should render type=number', () => {
        const { container } = render(<Input
            id="test1"
            type="number"
            title="test-title"
        />);

        expect(container).toMatchSnapshot();
    });

    it('should render type=text with error', () => {
        const { container } = render(<Input
            id="test2"
            type="text"
            title="test error"
            errorMessage="error"
        />);

        expect(container).toMatchSnapshot();
    });
});
