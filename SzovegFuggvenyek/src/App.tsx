import Fejlec from './components/Fejlec.tsx'
import Lablec from './components/Lablec.tsx'
import SzovegKezeloFuggvenyek from './components/SzovegKezeloFuggvenyek.tsx'

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Fejlec
        cim="Feladat szövegfüggvényekkel"
        alcim="useState, űrlapkezelés és szövegkezelő függvények"
      />
      <main className="flex-grow-1">
        <SzovegKezeloFuggvenyek />
      </main>
      <Lablec alkalmazas="SzovegFuggvenyek" feladat="3. feladat – Szövegfüggvények" />
    </div>
  )
}
