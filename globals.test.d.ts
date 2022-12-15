/// <reference types="vitest/globals"/>

// Reference: https://www.npmjs.com/package/@types/testing-library__jest-dom/v/5.14.5
interface TestingLibraryMatchers<E, R> extends Record<string, any> {
  toBeInTheDOM(container?: HTMLElement | SVGElement): R
  toBeInTheDocument(): R
  toBeVisible(): R
  toBeEmpty(): R
  toBeEmptyDOMElement(): R
  toBeDisabled(): R
  toBeEnabled(): R
  toBeInvalid(): R
  toBeRequired(): R
  toBeValid(): R
  toContainElement(element: HTMLElement | SVGElement | null): R
  toContainHTML(htmlText: string): R
  toHaveAttribute(attr: string, value?: unknown): R
  toHaveClass(...classNames: string[]): R
  toHaveClass(classNames: string, options?: { exact: boolean }): R
  toHaveDisplayValue(value: string | RegExp | Array<string | RegExp>): R
  toHaveFocus(): R
  toHaveFormValues(expectedValues: Record<string, unknown>): R
  toHaveStyle(css: string | Record<string, unknown>): R
  toHaveTextContent(text: string | RegExp, options?: { normalizeWhitespace: boolean }): R
  toHaveValue(value?: string | string[] | number | null): R
  toBeChecked(): R
  toHaveDescription(text?: string | RegExp | E): R
  toHaveAccessibleDescription(text?: string | RegExp | E): R
  toHaveAccessibleName(text?: string | RegExp | E): R
  toBePartiallyChecked(): R
  toHaveErrorMessage(text?: string | RegExp | E): R
}

declare namespace Vi {
  interface Assertion extends TestingLibraryMatchers<typeof expect.stringContaining, unknown> {}
}
