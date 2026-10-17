# SajatTema (Cipők) – 6. feladat, házi feladat

Vite + React + TypeScript alkalmazás az `useState` gyakorlására (Frontend óra, 5. heti anyag).
A témája: **Cipők** – cipő nyilvántartás.

## Mit mutat be

- Mintaadatok: 7 rekord, rekordonként 8 mező (márka, modell, típus, méret, ár, szín, anyag, azonosító).
- Táblázatos megjelenítés fejlécsorral, adatsorokkal és összegző láblécsorral.
- Keresőmező és „Keresés” gomb: kis- és nagybetűtől független szűrés, üres keresésnél minden rekord látszik.
- Rendezés mezőnként, növekvő és csökkenő irány kapcsolóval, valós időben.
- Új rekord felvétele űrlappal és mezőszintű validációval (kötelező mezők, érvényes számok).
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
