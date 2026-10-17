# Szamologep – 4. feladat

Vite + React + TypeScript alkalmazás az `useState` gyakorlására (Frontend óra, 5. heti anyag).

## Mit mutat be

- Két szám beviteli mező és négy művelet (összeadás, kivonás, szorzás, osztás).
- A számok, a művelet és az eredmény külön `useState` állapotváltozókban.
- Validáció: nem üres és érvényes számot igénylő mezők, nullával való osztás elleni védelem.
- Bootstrap 5 formázás, újrahasznált `Fejlec` és `Lablec` komponensek.

A Bootstrap 5 helyi függőségként (`node_modules/bootstrap`) van telepítve, így a
formázás sem CDN-ről töltődik.

## Futtatás

```bash
npm install
npm run dev      # fejlesztői szerver
npm run build    # production build
npm run preview  # a build megjelenítése
```
