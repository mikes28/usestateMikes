import Fejlec from './components/Fejlec.tsx'
import Lablec from './components/Lablec.tsx'
import ReactKapcsolo from './components/ReactKapcsolo.tsx'

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Fejlec
        cim="Kapcsoló – Állapotkezelés a Reactben"
        alcim="useState, eseménykezelés, feltételes megjelenítés és props"
      />
      <main className="flex-grow-1">
        <ReactKapcsolo />
      </main>
      <Lablec alkalmazas="Kapcsolo" feladat="1. feladat – Kapcsoló" />
    </div>
  )
}
