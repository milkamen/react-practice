import { render, screen } from "@testing-library/react";
import App5 from "./usEffect";

test("renders learn react link", () => {
  render(<App5 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
