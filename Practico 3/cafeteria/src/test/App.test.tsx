import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import App from '../App'
import { describe, it, expect } from 'vitest'
import { server } from './mocks/server'
import { delay, http, HttpResponse } from 'msw';

describe('App Component', () => {
  it('HU1 - deberia mostrar el menu de productos al cargar', async () => {
    render(<App />)

    await waitFor(() => {
      expect(screen.getAllByRole('listitem'))
    })
    expect(await screen.findByText('Cafe')).toBeInTheDocument()
    expect(await screen.findByText('Te')).toBeInTheDocument()
  })

  it('HU2 - agregar un item al pedido y verificar que aparece en el area de pedidos', async () => {
    render(<App />)

    await waitFor(() => {
      expect(screen.getAllByRole('listitem'))
    })

    const button = screen.getAllByRole('button', { name: /Agregar/i })
    fireEvent.click(button[0])

    const list = screen.getByRole('list')
    expect(list).toHaveTextContent('Cafe')
  })

  it('HU3 - agregar varios productos y calcular total del pedido', async () => {
    render(<App />)

    await waitFor(() => {
      expect(screen.getAllByRole('listitem'))
    })

    const button = screen.getAllByRole('button', { name: /Agregar/i })
    fireEvent.click(button[0])
    fireEvent.click(button[1])

    expect(screen.getByText('Total: $4500')).toBeInTheDocument()
  })

  it('HU4 - eliminar un producto en especifico de la lisat de pedidos', async () => {
    render(<App />)

    await waitFor(() => {
      expect(screen.getAllByRole('listitem'))
    })

    const button = screen.getAllByRole('button', { name: /Agregar/i })
    fireEvent.click(button[0])
    fireEvent.click(button[1])
    fireEvent.click(button[2])

    const buttonDelete = screen.getAllByRole('button', { name: /Eliminar/i })
    //Eliminamos el pedido 'Cafe'
    fireEvent.click(buttonDelete[0])

    const list = screen.getByRole('list')
    expect(list).not.toHaveTextContent('Cafe')
  })

  it('HU5 - Enviar pedido al endpoint /api/orders y esperar el mensaje "Pedido Confirmado"', async () => {
    render(<App />)

    await waitFor(() => {
      expect(screen.getAllByRole('listitem'))
    })

    const button = screen.getAllByRole('button', { name: /Agregar/i })
    fireEvent.click(button[0])
    fireEvent.click(button[1])

    const buttonSend = screen.getByRole('button', { name: /Enviar Pedido/i })
    fireEvent.click(buttonSend)

    await waitFor(() => {
      expect(screen.getByText(/Pedido Confirmado/i)).toBeInTheDocument()
    })
  })

  it('HU6 - Simulacion de obtener 0 datos en el menu', async () => {
    server.use(
      http.get('/api/menu', async () => {
        return HttpResponse.json([],
          { status: 200 }
        )
      }),
    )

    render(<App />)

    await waitFor(() => {
      expect(screen.getByText(/No hay productos disponibles/i)).toBeInTheDocument()
    })
  })

  it('HU6 - Simulacion de Error al obtener los datos del menu', async () => {
    server.use(
      http.get('/api/menu', async () => {
        return HttpResponse.json(null,
          { status: 500 }
        )
      }),
    )

    render(<App />)

    await waitFor(() => {
      expect(screen.getByText(/Error al cargar el Menu/i)).toBeInTheDocument()
    })
  })
})