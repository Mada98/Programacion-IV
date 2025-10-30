// test/mocks/handlers.ts
import { http, HttpResponse } from 'msw'

//EJEMPLO DE API, HAY Q MODIFIFICAR COSAS
export const handlers = [
  http.get('/api/tasks', () => {
    return HttpResponse.json([
      { id: 1, text: 'Aprender React', done: false },
      { id: 2, text: 'Configurar Vitest', done: true }
    ])
  }),
]