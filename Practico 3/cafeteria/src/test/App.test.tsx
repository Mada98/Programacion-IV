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

  it('HU3 - agregar varios productos y calcular total del pedido', async () => {
    render(<App/>)

    await waitFor(() => {
      expect(screen.getAllByRole('listitem'))
    })

    const button = screen.getAllByRole('button', {name: /Agregar/i})
    fireEvent.click(button[0])
    fireEvent.click(button[1])

    expect(screen.getByText('Total: $4500')).toBeInTheDocument() 
  })

  it('HU4 - eliminar un producto en especifico de la lisat de pedidos', async () => {
    render(<App/>)

    await waitFor(() => {
      expect(screen.getAllByRole('listitem'))
    })

    const button = screen.getAllByRole('button', {name: /Agregar/i})
    fireEvent.click(button[0])
    fireEvent.click(button[1])
    fireEvent.click(button[2])

    const buttonDelete = screen.getAllByRole('button', {name: /Eliminar/i})
    //Eliminamos el pedido 'Cafe'
    fireEvent.click(buttonDelete[0])

    const list = screen.getByRole('list')
    expect(list).not.toHaveTextContent('Cafe')
  })
  
  it('HU5 - Enviar pedido al endpoint /api/orders y esperar el mensaje "Pedido Confirmado"', async () => {
    render(<App/>)

    await waitFor(() => {
      expect(screen.getAllByRole('listitem'))
    })

    const button = screen.getAllByRole('button', {name: /Agregar/i})
    fireEvent.click(button[0])
    fireEvent.click(button[1])

    const buttonSend = screen.getByRole('button', {name: /Enviar Pedido/i})
    fireEvent.click(buttonSend)

    await waitFor(() => {
      expect(screen.getByText(/Pedido Confirmado/i)).toBeInTheDocument()
    })
  })
})