import Fejlec from './components/Fejlec.tsx'
import Lablec from './components/Lablec.tsx'
import ComplexCalculator from './components/ComplexCalculator.tsx'

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Fejlec
        cim="Complex Calculator"
        alcim="Összetett állapotkezelés és grafikus számológép"
      />
      <main className="flex-grow-1">
        <ComplexCalculator />
      </main>
      <Lablec alkalmazas="ComplexCalculator" feladat="5. feladat – Complex Calculator" />
    </div>
  )
}
