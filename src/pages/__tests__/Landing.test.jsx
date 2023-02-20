import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Landing from '../Landing'

test('landing page image appears', () => {
  render(<Landing />, { wrapper: MemoryRouter })
  expect(screen.getByText(/Click/i)).toBeInTheDocument()
})

test('landing page has images', () => {
  render(<Landing />, { wrapper: MemoryRouter })
  expect(screen.getByAltText(/click the eggs/i)).toBeInTheDocument()
})

test('landing page has link to input page', async () => {
  render(<Landing />, { wrapper: MemoryRouter })
  const link = await screen.findByRole('link')
  console.log(link.href)
  expect(link.href).toContain('inputs')
})
