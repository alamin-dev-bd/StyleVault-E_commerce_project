import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import HomePage from '@/pages/shop/HomePage'

describe('HomePage', () => {
  it('renders the heading', () => {
    render(<HomePage />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})