import { Page, Locator } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly todoInput: Locator;
  readonly todoList: Locator;
  readonly clearCompleted: Locator;

  constructor(page: Page) {
    this.page = page;
    this.todoInput = page.locator('.new-todo');
    this.todoList = page.locator('.todo-list li');
    this.clearCompleted = page.locator('.clear-completed');
  }

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc');
  }

  async addTodo(todoText: string) {
    await this.todoInput.fill(todoText);
    await this.todoInput.press('Enter');
  }

  async getTodos(): Promise<string[]> {
    return await this.todoList.allTextContents();
  }
  
  async toggleTodo(index: number) {
    await this.todoList.nth(index).locator('.toggle').click();
  }

  async clearCompletedTodos() {
    await this.clearCompleted.click();
  }
}
