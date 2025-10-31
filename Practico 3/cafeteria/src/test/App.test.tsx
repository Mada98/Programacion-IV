import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import App from '../App'
import { describe, it, expect } from 'vitest'

describe ('App Component', () => {
  it('HU1 - deberia mostrar el menu de productos al cargar', async () =>{
    render (<App/>)

    await waitFor(() => {
      expect(screen.getAllByRole('listitem'))
    })
    expect(await screen.findByText('Cafe')).toBeInTheDocument()
    expect(await screen.findByText('Te')).toBeInTheDocument()
  })

  it('HU2 - agregar un item al pedido y verificar que aparece en el area de pedidos', async () => {
    render(<App/>)

    await waitFor(() => {
      expect(screen.getAllByRole('listitem'))
    })

    const button = screen.getAllByRole('button', {name: /Agregar/i})
    fireEvent.click(button[0])

    const list = screen.getByRole('list')
    expect(list).toHaveTextContent('Cafe')
  })
})