import * as React from 'react';
import { ConvocatoryDetails } from './ConvocatoryDetails';
import { withA11y } from '@storybook/addon-a11y';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'ConvocatoryDetails',
  decorators: [withA11y],
};

export const withText = () => <BrowserRouter><ConvocatoryDetails /></BrowserRouter>;
