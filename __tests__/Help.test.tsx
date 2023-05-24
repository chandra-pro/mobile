import React from 'react';
import Help from '../screens/Help';
import renderWithAuth from '../utils/authProvider';

describe('Help Screen', () => {
  test('renders the Help screen', () => {
    const { getByText } = renderWithAuth(<Help />);
    const helpText = getByText('Help');
    expect(helpText).toBeDefined();
  });
});
