import { useEffect, useState } from 'react'
import { type Producto } from '../types/Producto.ts'

export function Menu() {
    const [menu, setMenu] = useState<Producto[]>([])
    const [order, setOrder] = useState<Producto[]>([])
    const [loading, setLoading] = useState<boolean | undefined>(undefined)
    const [status, setStatus] = useState<'sending' | 'success' | 'error' | 'idle'>('idle')

    const addProduct = (product: Producto) => {
        setOrder([...order, product])
    }

    const deleteProduct = (id: string) => {
        setOrder((prevOrder) => prevOrder.filter((p) => p.id !== id))
    }

    const calcularPrecio = () => {
        const precio = order.reduce((suma, ord) => suma + ord.price, 0)
        return precio
    }

    const sendOrders = async () => {
        try {
            setLoading(true)
            const res = await fetch('/api/orders', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(order)
            })
            if (!res.ok) throw new Error('Error al enviar el pedido')

            setOrder([])
            setLoading(false)
            setStatus('success')
        } catch {
            setStatus('error')
        }
    }

    useEffect(() => {
        setLoading(true)
        fetch('/api/menu')
            .then((res) => res.json())
            .then((data) => {
                setMenu(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div>Cargando menu</div>
    }
    if(status === 'error'){
        return <p>Error al enviar el pedido</p>
    }
    if(status === 'success'){
        return <p>Pedido Confirmado</p>
    }

    return (
        <div>
            <ul role='listItem'>
                {menu.map((product) => (
                    <li key={product.id}>
                        <h2>{product.nombre}</h2>
                        <p>Precio: {product.price}</p>
                        <button onClick={() => addProduct(product)}>Agregar</button>
                    </li>
                ))}
            </ul>
            <h1>Lista de Pedidos</h1>
            <h2>Total: ${calcularPrecio()}</h2>
            <ul role='list'>
                {order.map((order) => (
                    <li key={order.id}>
                        <h2>{order.nombre}</h2>
                        <p>Precio: {order.price}</p>
                        <button onClick={() => deleteProduct(order.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => sendOrders()}>Enviar Pedido</button>
        </div>
    )
}