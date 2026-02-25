import { render, screen, fireEvent } from '@testing-library/react';

import { Button, ButtonProps } from './Button';

describe('Button', () => {
  const defaultProps: ButtonProps = {
    children: 'Click me',
  };

  const renderButton = (props: Partial<ButtonProps> = {}): void => {
    render(<Button {...defaultProps} {...props} />);
  };

  describe('Rendering', () => {
    it('should render with correct text', () => {
      renderButton();
      expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('should render with custom className', () => {
      renderButton({ className: 'custom-class' });
      const button = screen.getByTestId('button');
      expect(button).toHaveClass('custom-class');
    });

    it('should render with custom testId', () => {
      renderButton({ testId: 'custom-test-id' });
      expect(screen.getByTestId('custom-test-id')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('should render primary variant by default', () => {
      renderButton();
      const button = screen.getByTestId('button');
      expect(button.className).toContain('button--primary');
    });

    it('should render secondary variant', () => {
      renderButton({ variant: 'secondary' });
      const button = screen.getByTestId('button');
      expect(button.className).toContain('button--secondary');
    });

    it('should render outline variant', () => {
      renderButton({ variant: 'outline' });
      const button = screen.getByTestId('button');
      expect(button.className).toContain('button--outline');
    });
  });

  describe('Sizes', () => {
    it('should render medium size by default', () => {
      renderButton();
      const button = screen.getByTestId('button');
      expect(button.className).toContain('button--medium');
    });

    it('should render small size', () => {
      renderButton({ size: 'small' });
      const button = screen.getByTestId('button');
      expect(button.className).toContain('button--small');
    });

    it('should render large size', () => {
      renderButton({ size: 'large' });
      const button = screen.getByTestId('button');
      expect(button.className).toContain('button--large');
    });
  });

  describe('States', () => {
    it('should not be disabled by default', () => {
      renderButton();
      const button = screen.getByTestId('button');
      expect(button).not.toBeDisabled();
    });

    it('should be disabled when disabled prop is true', () => {
      renderButton({ disabled: true });
      const button = screen.getByTestId('button');
      expect(button).toBeDisabled();
    });

    it('should render full width when fullWidth prop is true', () => {
      renderButton({ fullWidth: true });
      const button = screen.getByTestId('button');
      expect(button.className).toContain('button--full-width');
    });
  });

  describe('Types', () => {
    it('should have button type by default', () => {
      renderButton();
      const button = screen.getByTestId('button');
      expect(button).toHaveAttribute('type', 'button');
    });

    it('should have submit type when specified', () => {
      renderButton({ type: 'submit' });
      const button = screen.getByTestId('button');
      expect(button).toHaveAttribute('type', 'submit');
    });

    it('should have reset type when specified', () => {
      renderButton({ type: 'reset' });
      const button = screen.getByTestId('button');
      expect(button).toHaveAttribute('type', 'reset');
    });
  });

  describe('Interactions', () => {
    it('should call onClick when clicked', () => {
      const handleClick = jest.fn();
      renderButton({ onClick: handleClick });

      fireEvent.click(screen.getByTestId('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when disabled', () => {
      const handleClick = jest.fn();
      renderButton({ onClick: handleClick, disabled: true });

      fireEvent.click(screen.getByTestId('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('should call onClick multiple times when clicked multiple times', () => {
      const handleClick = jest.fn();
      renderButton({ onClick: handleClick });

      const button = screen.getByTestId('button');
      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);

      expect(handleClick).toHaveBeenCalledTimes(3);
    });

    it('should work without onClick handler', () => {
      renderButton();
      const button = screen.getByTestId('button');

      expect(() => {
        fireEvent.click(button);
      }).not.toThrow();
    });
  });

  describe('Children', () => {
    it('should render text children', () => {
      renderButton({ children: 'Test Button' });
      expect(screen.getByText('Test Button')).toBeInTheDocument();
    });

    it('should render element children', () => {
      renderButton({
        children: (
          <span data-testid="icon">
            <i>Icon</i>
          </span>
        ),
      });
      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });

    it('should render multiple children', () => {
      renderButton({
        children: (
          <>
            <span>Icon</span>
            <span>Text</span>
          </>
        ),
      });
      expect(screen.getByText('Icon')).toBeInTheDocument();
      expect(screen.getByText('Text')).toBeInTheDocument();
    });
  });
});
