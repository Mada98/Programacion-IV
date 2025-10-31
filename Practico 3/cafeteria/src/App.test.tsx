import { render, screen, waitFor } from '@testing-library/react'
import App from './App'
import { describe, it, expect } from 'vitest'

describe ('App Component', () => {
  it('deberia mostrar el menu de productos al cargar', async () =>{
    render (<App/>)

    await waitFor(() => {
      expect(screen.getAllByRole('listitem').length).toBeGreaterThan(0)
    })
    expect(await screen.findByText('Cafe')).toBeInTheDocument()
    expect(await screen.findByText('Te')).toBeInTheDocument()
  })
})