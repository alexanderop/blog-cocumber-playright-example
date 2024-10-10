import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://pokeapi.co/api/v2/pokemon/pikachu', () => {
    return HttpResponse.json({
      name: 'Pikachu',
      sprites: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      },
    });
  }),

  http.get('https://pokeapi.co/api/v2/pokemon/invalidpokemon', () => {
    return new HttpResponse(null, { status: 404 });
  }),
];