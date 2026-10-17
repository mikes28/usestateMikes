# React alkalmazások – 5. heti anyag (useState)

Az `usteState_ujAnyagEsOraiFeladatok.md` feladatsor mind a hat alkalmazása, külön
Vite + React + TypeScript projektként (`strict: true` típusellenőrzéssel).

| Feladat | Mappa | Tartalom |
| --- | --- | --- |
| 1. | `Kapcsolo` | Kapcsoló (`Ki`/`Be`), `props`-szal átadott kép, `Fejlec` és `Lablec` komponensek |
| 2. | `ColorChanger` | Véletlenszerű háttérszín generálása `useState`-tel és `useEffect`-tel |
| 3. | `SzovegFuggvenyek` | Szövegkezelő gyakorlat: nagybetűs/kisbetűs, szó- és mondatkezdő nagybetűs, szövegirány |
| 4. | `Szamologep` | Két szám, négy művelet, validáció és nullával való osztás elleni védelem |
| 5. | `ComplexCalculator` | Grafikus számológép láncolt számítással és hibakezeléssel |
| 6. | `SajatTema` | Házi feladat, téma: **Cipők** – táblázat, keresés, rendezés, adatfelvétel, validáció |

Minden alkalmazásban ugyanaz a két újrahasznált komponens található:
`src/components/Fejlec.tsx` (fejléc) és `src/components/Lablec.tsx` (lábléc).
A formázás kizárólag Bootstrap 5 utility osztályokkal történik, nincs saját
CSS fájl. A Bootstrap helyi függőség (`node_modules/bootstrap`), a 1. feladat
izzóképei pedig a `public/kepek/` mappában vannak – így egyik alkalmazás sem
igényel internetkapcsolatot.

## Futtatás

```bash
cd <alkalmazas-mappa>
npm install
npm run dev
```

További parancsok: `npm run build` (production build), `npm run preview` (a build
megjelenítése), `npm run lint` (oxlint).
