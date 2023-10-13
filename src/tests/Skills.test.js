import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Skills from './Skills';

test('autocomplete skill selection adds skill to input field', () => {
  const { getByPlaceholderText, getByText } = render(<Skills />);

  const input = getByPlaceholderText('Type Your Skills Here');
  fireEvent.change(input, { target: { value: 'Skill 1' } });

  // Check if the autocomplete dropdown shows the correct skill
  expect(getByText('Skill 1')).toBeInTheDocument();

  // Click the autocomplete option to select it
  fireEvent.click(getByText('Skill 1'));

  // Check if the input field value is updated after skill selection
  expect(input.value).toBe('Skill 1');
});

test('adding skill to input field calls listofitems function', () => {
  const listofitemsMock = jest.fn();
  const { getByPlaceholderText, getByText } = render(<Skills listofitems={listofitemsMock} />);

  const input = getByPlaceholderText('Type Your Skills Here');
  fireEvent.change(input, { target: { value: 'Skill 1' } });
  fireEvent.click(getByText('Skill 1'));

  // Check if listofitems function is called after skill selection
  expect(listofitemsMock).toHaveBeenCalled();
});
