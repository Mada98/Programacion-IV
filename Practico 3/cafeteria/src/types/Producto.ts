import { z } from 'zod'

export const ProductoSchema = z.object({
  id: z.string(),
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  price: z.number().positive('El precio debe ser positivo'),
})

export type Producto = z.infer<typeof ProductoSchema>