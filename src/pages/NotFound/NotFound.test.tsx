import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";

test('not-fount-info', () => {
    render(<NotFound />);
    const text = screen.getByTestId('not-found-text');
    expect(text).toHaveTextContent('404 Not Found');
})