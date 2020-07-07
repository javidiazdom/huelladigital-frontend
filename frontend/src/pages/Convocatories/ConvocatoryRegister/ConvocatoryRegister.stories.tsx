import * as React from 'react';
import {ConvocatoryRegister} from './ConvocatoryRegister';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'ConvocatoryRegister',
  decorators: [withA11y],
};

export const withText = () => <ConvocatoryRegister />;