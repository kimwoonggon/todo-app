import { afterAll, describe, expect, test } from 'vitest';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

// afterAll(cleanup) 이건 뭐지?
// 필요 없음
afterAll(cleanup);

describe('App', () => {
  test('should add a task when Enter key is pressed', async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.getByRole('textbox', { name: 'Add Task:' });

    await user.type(input, 'New Task(enter){enter}');

    await waitFor(() => {
      expect(screen.queryAllByRole('listitem')).toHaveLength(2);
    });
  });
});
