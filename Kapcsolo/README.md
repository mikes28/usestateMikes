# Kapcsolo – 1. feladat

Vite + React + TypeScript alkalmazás az `useState` gyakorlására (Frontend óra, 5. heti anyag).

## Mit mutat be

- `useState`-tel kezelt kapcsoló a `ReactKapcsolo` komponensben (`Ki` / `Be` állapot).
- `props`-szal átadott kép megjelenítése a `KepBetolto` komponensben.
- Feltételes megjelenítés: a bekapcsolt és kikapcsolt izzó képe az állapottól függ.
- Újrahasznált `Fejlec` és `Lablec` komponensek.

## Futtatás

```bash
npm install
npm run dev      # fejlesztői szerver
npm run build    # production build
npm run preview  # a build megjelenítése
```

## Megjegyzés

Az izzó képei a W3Schools példájából származnak
(`https://www.w3schools.com/js/pic_bulbon.gif` és `.../pic_bulboff.gif`), és a
`public/kepek/` mappában helyi másolatként vannak elhelyezve, hogy az alkalmazás
internetkapcsolat nélkül is működjön.

A Bootstrap 5 is helyi függőségként (`node_modules/bootstrap`) van telepítve,
így a formázás sem CDN-ről töltődik.
