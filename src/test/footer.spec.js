import Footer from '../Components/footer/Footer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react'

// please add your test cases here

// describe("Testing Footer Component",()=>{
//     test("demo test", ()=>{
//         console.log("Test executed");
//     })
    test("Should have Home text in Footer",()=>{
    render(<Footer/>)
    expect(screen.getByText("Home")).toBeInTheDocument()
})
// })

    test("Should have About text in Footer",()=>{
    render(<Footer/>)
    expect(screen.getByText("About")).toBeInTheDocument()
})

    test("Should have features text in Footer",()=>{
    render(<Footer/>)
    expect(screen.getByText("Features")).toBeInTheDocument()
})

    test("Should have Pricing text in Footer",()=>{
    render(<Footer/>)
    expect(screen.getByText("Pricing")).toBeInTheDocument()
})

    test("Should have FAQs text in Footer",()=>{
    render(<Footer/>)
    expect(screen.getByText("FAQs")).toBeInTheDocument()
})


export default Footer;