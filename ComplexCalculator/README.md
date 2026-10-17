# ComplexCalculator – 5. feladat

Vite + React + TypeScript alkalmazás az `useState` gyakorlására (Frontend óra, 5. heti anyag).

## Mit mutat be

- Grafikus számológép számjegy-, tizedespont- és műveletgombokkal.
- Kijelző, amely a beírt értékeket és az eredményt is mutatja.
- Összetett állapotkezelés: kijelző, első operandus, függőben lévő művelet, új operandus jelző.
- Láncolt számítás (pl. `12 + 3 × 4 =` → `60`), törlés gomb (`C`).
- Hibakezelés: nullával való osztás, ismeretlen művelet, hiányos számítás.
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
