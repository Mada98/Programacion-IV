import { useEffect, useState } from 'react'
import { type Producto } from '../types/Producto.ts'

export function Menu() {
    const [menu, setMenu] = useState<Producto[]>([])
    const [order, setOrder] = useState<Producto[]>([])
    const [loading, setLoading] = useState(true)

    const addProduct = (product:Producto) => {
        setOrder([...order, product])
    } 

    useEffect(() => {
        fetch('/api/menu')
            .then ((res) => res.json())
            .then((data) =>{
                setMenu(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div>Cargando menu</div>
    }

    return (
        <div>
            <h1>Menu de la Cafeteria</h1>
            <ul role = 'listItem'>
                {menu.map((product) => (
                    <li key = {product.id}>
                        <h2>{product.nombre}</h2>
                        <p>Precio: {product.price}</p>
                        <button onClick={() => addProduct(product)}>Agregar</button>
                    </li>
                ))}
            </ul>
            <h1>Lista de Pedidos</h1>
            <ul role= 'list'>
                {order.map((order) => (
                    <li key={order.id}>
                        <h2>{order.nombre}</h2>
                        <p>Precio: {order.price}</p>
                        <button onClick={() => 4}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}