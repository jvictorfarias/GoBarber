import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, isLoading, ...rest }) => (
  <Container {...rest}>{isLoading ? 'Carregando...' : children}</Container>
);

export default Button;
