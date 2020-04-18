import React from 'react';
import { render } from '@testing-library/react';
import SocialNetworkApp from "./App";

test('renders learn react link', () => {
  const { getByText } = render(<SocialNetworkApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
