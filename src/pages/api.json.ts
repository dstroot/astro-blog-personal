import type { APIRoute } from 'astro';

// export const GET: APIRoute = async ({ params, request }) => {
export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      name: 'Astro',
      url: 'https://astro.build/'
    })
  )
}