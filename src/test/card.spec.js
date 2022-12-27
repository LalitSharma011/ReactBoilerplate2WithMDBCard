import Card from '../Components/card/Card';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react'
import {render as renderer, unmountComponentAtNode} from 'react-dom'
// please add your test cases here

// describe("Testing Card Component",()=>{
//     test("demo test", ()=>{
//         console.log("Test executed");
//     })
    test("Should have Read Later text in Card",()=>{
    render(<Card/>)
    expect(screen.getByText("Read Later")).toBeInTheDocument()
})
// })

let element;
beforeEach(()=>{
    element= document.createElement("div")
    document.body.appendChild(element)
  })
  afterEach(()=>{
   unmountComponentAtNode(element)
   element.remove()
   element=null
  })


it("Should have 1 anchor links in Card component",()=>{
    renderer(<Card/>,element)
    const count=element.getElementsByTagName('a').length
    expect(count).toBe(1)
})

it("Should have 1 button tag in Card component",()=>{
    renderer(<Card/>,element)
    const count=element.getElementsByTagName('button').length
    expect(count).toBe(1)
})

it("Should have 1 img tag in Card component",()=>{
    renderer(<Card/>,element)
    const count=element.getElementsByTagName('img').length
    expect(count).toBe(1)
})

test("Should have btn class in cardbodyclass testid",()=>{
    render(<Card/>)
    expect(screen.getByTestId("cardbodyclass")).toHaveClass("btn");
})


export default Card;