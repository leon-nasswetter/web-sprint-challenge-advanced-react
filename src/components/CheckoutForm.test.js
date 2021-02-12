import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.queryByText(/checkout form/i);
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  const firstName = screen.getByLabelText(/first name:/i);
  const lastName = screen.getByLabelText(/last name:/i);
  const address = screen.getByLabelText(/address:/i);
  const city = screen.getByLabelText(/city:/i);
  const state = screen.getByLabelText(/state:/i);
  const zip = screen.getByLabelText(/zip:/i);
  const button = screen.getByRole("button", { name: /checkout/i });

  userEvent.type(firstName, "Leon");
  userEvent.type(lastName, "Nasswetter");
  userEvent.type(address, "the moon");
  userEvent.type(city, "MOONvillage");
  userEvent.type(state, "MOONtana");
  userEvent.type(zip, "420");
  userEvent.click(button);

//const successMessage = screen.findByText(/You have ordered some plants! Woo-hoo!/i);
  const successMessage = screen.getByText(/You have ordered some plants! Woo-hoo!/i);
  expect(successMessage).toBeInTheDocument();
});
