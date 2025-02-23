import "@testing-library/jest-dom";
import { RouterProvider, createMemoryRouter, MemoryRouter} from "react-router-dom"
import { render, screen } from "@testing-library/react";
import routes from "../routes";



test('renders the Home component on route "/"', () => {
  const router = createMemoryRouter(routes)
  render(
    <RouterProvider router={router}/>
);
  expect(screen.getByText(/Home Page/)).toBeInTheDocument();
});


test('renders the Directors component on route "/directors"', () => {
    const router = createMemoryRouter(routes, {
        initialEntries: ['/directors']
    })
  render(
      <RouterProvider router={router}/>
  );
  expect(screen.queryByText(/Directors Page/)).toBeInTheDocument();
});


test("renders an error page when given a bad URL", () =>{
  const router = createMemoryRouter(routes, {
      initialEntries: ["/bad-route"]
  })
  render(
      <RouterProvider router={router} />
  )
  expect(screen.getByText(/Oops! Looks like something went wrong./)).toBeInTheDocument()
})
