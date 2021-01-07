import { Link } from 'react-router-dom';
import React from 'react';
import './styles.scss';
import { LinkButtonProps } from './types';

export const LinkButton: React.FC<LinkButtonProps> = ({ path, text = 'boton', className = 'LinkButton' }) => {
  return (
    <Link to={path}>
      <button className={className}>{text}</button>
    </Link>
  );
};
