import { useEffect, useState } from 'react'
import { type Producto } from '../types/Producto.ts'

export function Menu() {
    const [menu, setMenu] = useState<Producto[]>([])
    const [loading, setLoading] = useState(true)

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
            <ul>
                {menu.map((product) => (
                    <li key = {product.id}>
                        {product.nombre}
                    </li>
                ))}
            </ul>
        </div>
    )
}