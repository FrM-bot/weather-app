import React from 'react'
import SearchBar from './SearchBar'
import { describe, expect, test } from 'vitest'
import { screen, render } from '@testing-library/react'

describe('SearchBar', () => {
  test('should show login form', () => {
    render(<SearchBar />)
    const input = screen.getByPlaceholderText('Ingresa una ciudad...')
    input.value = 'Buenos Aires'
    expect(input.value).toBe('Buenos Aires')
  })
})
