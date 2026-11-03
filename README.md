# Misión 3 - Reactor Core (Harry Potter App)

Reconstrucción de la app de Harry Potter usando React 19 y Vite.

## Cómo ejecutar
1. `npm install`
2. `npm run dev`

## Características
- Componentización (Card, List, Filters, Stats).
- Custom hooks: `useFetch` y `useLocalStorage` (Bonus).
- Búsqueda en tiempo real y filtrado por casas.
- Sistema de favoritos persistente.

## Uso de IA
- **Herramienta**: ChatGPT.
- **Qué delegué**: La estructura inicial de los componentes y la lógica del hook `useLocalStorage`.
- **Cómo lo verifiqué**: Añadí un favorito, recargué la página y comprobé que seguía marcado.
- **Qué escribí yo**: La lógica de filtrado con `useMemo`, la estructura de los componentes y el manejo de las keys en las listas.

## Autopsia
1. **Decisión 1**: Uso `useMemo` para derivar los personajes filtrados en lugar de guardarlos en un `useState` aparte. Descarté el estado duplicado porque tendría que sincronizarlo manualmente cada vez que los filtros cambiasen, lo que llevaría a bugs.
2. **Decisión 2**: Uso un custom hook `useFetch` en lugar de poner el `fetch` directamente en el `useEffect` de `App`. Descarté ponerlo en `App` porque así puedo reutilizar la lógica y el código queda más limpio.