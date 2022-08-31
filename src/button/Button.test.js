import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';

describe('Button tests', () => {
  test('should render without properties and default text content', () => {
    render(<Button></Button>);

    const buttonElement = screen.getByRole('button');
    
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Button');
  });

  test('should render with a custon text content', () => {
    render(<Button>Test</Button>);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Test');
  });

  test('should call the callback passed when clicked the button', () => {
    const callback = jest.fn(() => {});
    render(<Button handleClick={callback}></Button>);
    
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    expect(buttonElement).toBeInTheDocument();
    expect(callback).toBeCalled();
  });
});