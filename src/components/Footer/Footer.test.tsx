import { render, screen } from "@testing-library/react";
import App from "../../App";

test('rs-logo', () => {
    render(<App />);
    const rsLogo = screen.getByTestId('rs-logo');
    expect(rsLogo.getAttribute('src')).toEqual('https://rs.school/images/rs_school_js.svg');
});

test('correct footer year', () => {
    render(<App />);
    const year = screen.queryByText('2023');
    expect(year).toHaveTextContent('2023');
});

test('link-to-kristina-github', () => {
    render(<App />);
    const kristina = screen.queryByTestId('kristina')?.getAttribute('href');
    expect(kristina).toBe('https://github.com/KasyanovskayaKristina');
});

test('link-to-msultanov-github', () => {
    render(<App />);
    const msultanov = screen.queryByTestId('msultanov')?.getAttribute('href');
    expect(msultanov).toBe('https://github.com/msultanovdev');
});