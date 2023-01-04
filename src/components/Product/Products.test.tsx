import { render } from '@testing-library/react'
import * as React from 'react'
import { BrowserRouter } from "react-router-dom"
import { Products } from './Products'

test('my component test', () => {
    const Product=(
    <BrowserRouter>
    <Products 
        name={"name"}
        price={0}      
        img={"1"}
        productCode={"productCode"}
        availability={"i.availability"}
        sideImages={["i.sideImages"]}
        quantity={0}
    />
    </BrowserRouter>)
    const { getByRole, getByText, getByAltText } = render(Product)
  
    const imgElement = getByAltText(/image/i)
    expect(imgElement).toBeTruthy()
  
    const firstParagraph = getByText(/first paragraph/i)
    expect(firstParagraph).toBeTruthy()
  
    const secondParagraph = getByText(/second paragraph/i)
    expect(secondParagraph).toBeTruthy()
  
    const buttonElement = getByRole('button')
    expect(buttonElement).toBeTruthy()
  })