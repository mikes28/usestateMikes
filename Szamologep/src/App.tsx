import Fejlec from './components/Fejlec.tsx'
import Lablec from './components/Lablec.tsx'
import Calculator from './components/Calculator.tsx'

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Fejlec
        cim="Számológép"
        alcim="useState, űrlapkezelés, feltételes működés és matematikai műveletek"
      />
      <main className="flex-grow-1">
        <Calculator />
      </main>
      <Lablec alkalmazas="Szamologep" feladat="4. feladat – Számológép" />
    </div>
  )
}
