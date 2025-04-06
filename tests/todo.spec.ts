import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test('should add and toggle a todo item', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();

  await todoPage.addTodo('Write Playwright POM test');

  const todos = await todoPage.getTodos();

  expect(todos.includes('Write Playwright POM test')).toBeTruthy();

  await todoPage.toggleTodo(0);
  await todoPage.clearCompletedTodos();

  const updatedTodos = await todoPage.getTodos();

  expect(updatedTodos.includes('Write Playwright POM test')).toBeFalsy();
});
