# SzovegFuggvenyek – 3. feladat

Vite + React + TypeScript alkalmazás az `useState` gyakorlására (Frontend óra, 5. heti anyag).

## Mit mutat be

- Szövegbevitel, a beírt karakterek száma és a megjelenített szöveg.
- Alapműveletek: Nagybetűs, Kisbetűs, Visszaállít.
- Haladó műveletek: Szókezdő nagybetűs, Mondatkezdő nagybetűs, Szövegirány
  visszafelé / normál / kapcsoló.
- A műveletek a megjelenített eredményen dolgoznak, a beviteli mező tartalma érintetlen marad.
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
