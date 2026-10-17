# ColorChanger – 2. feladat

Vite + React + TypeScript alkalmazás az `useState` gyakorlására (Frontend óra, 5. heti anyag).

## Mit mutat be

- A háttérszín `useState`-ben tárolt állapota.
- A gomb minden megnyomásakor új, véletlenszerű szín generálódik.
- A szín `useEffect`-tel (side effect) kerül az oldal hátterére.
- Újrahasznált `Fejlec` és `Lablec` komponensek.

A Bootstrap 5 helyi függőségként (`node_modules/bootstrap`) van telepítve, így a
formázás sem CDN-ről töltődik.

## Futtatás

```bash
npm install
npm run dev      # fejlesztői szerver
npm run build    # production build
npm run preview  # a build megjelenítése
```
