import Header from '../Components/header/Header';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react'
// please add your test cases here

// describe("Testing Header Component",()=>{
//     test("demo test", ()=>{
//         console.log("Test executed");
//     })
    test("Should have NatWest text in header",()=>{
    render(<Header/>)
    expect(screen.getByText("NatWest")).toBeInTheDocument()
})
// }) 

    test("Should have Home text in header",()=>{
    render(<Header/>)
    expect(screen.getByText("Home")).toBeInTheDocument()
})

    test("Should have Link text in header",()=>{
    render(<Header/>)
    expect(screen.getByText("Link")).toBeInTheDocument()
})

    test("Should have More text in header",()=>{
    render(<Header/>)
    expect(screen.getByText("More")).toBeInTheDocument()
})

    test("Should have Search text in header",()=>{
    render(<Header/>)
    expect(screen.getByText("Search")).toBeInTheDocument()
})


export default Header;