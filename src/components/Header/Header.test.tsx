import { render, screen } from "@testing-library/react";
import App from "../../App";

test('header-link-title', () => {
    render(<App />);
    const title = screen.getByTestId('title');
    expect(title).toHaveTextContent('Online Store');
});