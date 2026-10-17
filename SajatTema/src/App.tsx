import Fejlec from './components/Fejlec.tsx'
import Lablec from './components/Lablec.tsx'
import CipokNyilvantarto from './components/CipokNyilvantarto.tsx'

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Fejlec
        cim="Cipők"
        alcim="Saját téma – tömbkezelés, keresés, rendezés, adatfelvétel és validáció"
      />
      <main className="flex-grow-1">
        <CipokNyilvantarto />
      </main>
      <Lablec alkalmazas="SajatTema" feladat="6. feladat – Cipők (házi feladat)" />
    </div>
  )
}
