import { http, HttpResponse } from 'msw';

const mockMenu = [
  { id: '1', nombre: 'Cafe', price: 3000},
  { id: '2', nombre: 'Te', price: 1500},
  { id: '3', nombre: 'Alfajor', price: 1500  },
];

export const handlers = [
    http.get('/api/menu', () => {
    return HttpResponse.json(mockMenu);
  }),
]

