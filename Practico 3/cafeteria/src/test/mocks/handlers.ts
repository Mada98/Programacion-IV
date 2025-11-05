import { delay, http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/menu', async () => {
    delay(150)
    return HttpResponse.json([
      { id: '1', nombre: 'Cafe', price: 3000 },
      { id: '2', nombre: 'Te', price: 1500 },
      { id: '3', nombre: 'Alfajor', price: 1500 }
    ],
    { status: 200 }
    )
  }),

  http.post('/api/orders', async () => {
    return HttpResponse.json({},{status: 201})
  })
]

