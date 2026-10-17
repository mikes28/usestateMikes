import Fejlec from './components/Fejlec.tsx'
import Lablec from './components/Lablec.tsx'
import ColorChanger from './components/ColorChanger.tsx'

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Fejlec
        cim="Color Changer"
        alcim="useState, eseménykezelés és dinamikus stílusbeállítás"
        className="bg-opacity-75"
      />
      <main className="flex-grow-1">
        <ColorChanger />
      </main>
      <Lablec
        alkalmazas="ColorChanger"
        feladat="2. feladat – Color Changer"
        className="bg-opacity-75"
      />
    </div>
  )
}
