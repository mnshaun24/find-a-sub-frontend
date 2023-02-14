import { fireEvent, render } from "@testing-library/react";
import SubHome from "../pages/SubHome";

describe(SubHome, () => {
    it("login drop down displays when login is clicked", () => {
        const { getByRole } = render(<SubHome showLoginModal={false} />)
        const loginBttn = getByRole("button", { name: "Login Here"});
        fireEvent.click(loginBttn);
        expect(getByRole).toBeTruthy();
    });

    it("register drop down displays when login is clicked", () => {
        const { getByRole } = render(<SubHome showRegModal={false} />)
        const regBttn = getByRole("button", { name: "Register Here"});
        fireEvent.click(regBttn);
        expect(getByRole).toBeTruthy();
    });
});