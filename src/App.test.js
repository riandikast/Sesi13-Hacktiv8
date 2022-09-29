import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Navbar from "./component/Navbar";
import PostPages from "./component/body/PostItem";

test("test", async () => {
  render(<Navbar/>);
  const title = screen.getByTestId("judul");
  expect(title).toHaveTextContent('Testing')

});


test("test2", async () => {
  render(<PostPages />);
  const btn = screen.getByTestId("button1");
  expect(btn).toHaveTextContent('Button Buat Testing')

});
