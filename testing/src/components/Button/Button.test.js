import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from './index';
import styles from './Button.style'

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
});

//style testing
test('should render default theme style', () => {
    const comp = render(<Button />);
    const buttonStyle = comp.getByTestId('button-touchable').props.style;
    expect(buttonStyle).toMatchObject(styles.primary.container);
})
test('should render given theme style', () => {
    const selectedTheme = "secondary";
    const comp = render(<Button theme={selectedTheme} />);
    const buttonStyle = comp.getByTestId('button-touchable').props.style;
    expect(buttonStyle).toMatchObject(styles[selectedTheme].container);
    //console.log(buttonStyle)
})