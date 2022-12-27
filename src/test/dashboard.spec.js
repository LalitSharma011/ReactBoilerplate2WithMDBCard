import Dashboard from '../Components/dashboard/Dashboard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react'
import { render as renderer, unmountComponentAtNode } from 'react-dom'
// please add your test cases here

let element;
beforeEach(() => {
    element = document.createElement("div")
    document.body.appendChild(element)
})
afterEach(() => {
    unmountComponentAtNode(element)
    element.remove()
    element = null
})

it("Should have 1 div tab in Dashboard component", () => {
    renderer(<Dashboard />, element)
    const count = element.getElementsByTagName('div').length
    expect(count).toBe(1)
})

test("Should have container class in dashboardId", () => {
    render(<Dashboard />)
    expect(screen.getByTestId("dashboardId")).toHaveClass("container")
})

test("div tag should have container class", () => {
    renderer(<Dashboard />, element)
    const links = element.getElementsByTagName("div")
    for (let index = 1; index < links.length; index++) {
        expect(links[index]).toHaveClass("container")
    }
})

test("Should have Search URL in Dashboard", () => {
    render(<Dashboard />)
    expect(screen.getByText("https://newsapi.org/v2/top-headlines?country=in&apiKey=7173bb0ecf214c62a37cb63362f13c0e")).toBeInTheDocument();
})

test("Should have Search URL in Dashboard", () => {
    render(<Dashboard />)
    expect(screen.getByText("7173bb0ecf214c62a37cb63362f13c0e")).toBeInTheDocument();
})


export default Dashboard;