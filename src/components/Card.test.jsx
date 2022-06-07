import React from 'react'
import Card from './Card'
import { describe, it, beforeEach, vi, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import SvgCross from './icons/cross'

describe('Card', () => {
  const card = {
    id: 1,
    name: 'Buenos Aires',
    tempMax: 20,
    tempMin: 10,
    img: [{ icon: '01d' }]
  }
  let component
  beforeEach(() => {
    component = render(
            <BrowserRouter>
                <Card {...card} img={card.img[0].icon} />
            </BrowserRouter>
    )
  })
  it('Comprobando que se renderiza con el nombre de la ciudad', () => {
    component.getByText(card.name)
  })
  it('Comprobando que se renderiza con la temperatura máxima', () => {
    component.getByText(card.tempMax)
  })
  it('Comprobando que se renderiza con la temperatura mínima', () => {
    component.getByText(card.tempMin)
  })
  it('Comprobando que se renderiza con la imagen de la ciudad', () => {
    component.getByAltText(card.img[0].icon)
  })
  it('Comprobando que se renderiza y funciona el botón de cerrar', () => {
    const closeButton = component.getByRole('close-card')
    const mockFn = vi.fn()
    closeButton.onclick = mockFn
    expect(closeButton).toContain(SvgCross)
    fireEvent.click(closeButton)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
