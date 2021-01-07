import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ConvocatoryVolunteers} from './';

describe('ConvocatoryVolunteers', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <ConvocatoryVolunteers/>,
    );
    expect(renderResult.queryByText('Hello from ConvocatoryVolunteers!')).toBeTruthy();
  });
});