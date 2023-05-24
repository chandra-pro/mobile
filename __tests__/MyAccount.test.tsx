import React from 'react';
import MyAccount from '../screens/MyAccount';
import renderWithAuth from '../utils/authProvider';

describe('MyAccount Screen', () => {
  test('renders the MyAccount screen', () => {
    const { getByText } = renderWithAuth(<MyAccount />);
    const myAccountText = getByText('MyAccount');
    expect(myAccountText).toBeDefined();
  });
});
