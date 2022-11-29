import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from './index';

test('should match with snapshot', () => {
    const comp = render(<Button />);
    expect(comp).toMatchSnapshot();
});

test('should render title correctly', () => {
    const testTitle = "test"
    const comp = render(<Button title={testTitle} />);
    const buttonText = comp.getByTestId("button-title").children[0];
    expect(buttonText).toBe(testTitle);

});

test('should trigger onPress', () => {
    const mockFunction = jest.fn();
    const comp = render(<Button onClick={mockFunction} />);

    //tıklanma simüle ediliyor
    const buttonTouchable = comp.getByTestId("button-touchable");
    fireEvent(buttonTouchable, "press");

    expect(mockFunction).toBeCalled();
})