import { afterAll, describe, expect, test } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// afterAll(cleanup) 이건 뭐지?
// 필요 없음
afterAll(cleanup);

describe('App', () => {
  test('should render input field and add button', () => {
    render(<App />);

    // screen.getByRole('textbox', { name: 'Add Task:' });
    // screen.getByRole('button', { name: 'Add' });
    const input = screen.getByRole('textbox', { name: 'Add Task:' });
    const button = screen.getByRole('button', { name: 'Add' });

    // expect(input).toBeDefined();
    // expect(button).toBeDefined();

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('should add a new task when the add button is clicked', () => {
    render(<App />);
    const input = screen.getByRole('textbox', { name: 'Add Task:' });
    const button = screen.getByRole('button', { name: 'Add' });

    fireEvent.change(input, {
      target: {
        value: 'New Task',
      },
    });
    fireEvent.click(button);

    expect(screen.getByText('New Task')).toBeInTheDocument();
  });
});
