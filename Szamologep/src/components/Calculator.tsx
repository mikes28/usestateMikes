import { useState } from 'react'

type Muvelet = '+' | '-' | '*' | '/'

interface MuveletLeiras {
  kulcs: Muvelet
  cim: string
  jel: string
}

const MUVELETEK: MuveletLeiras[] = [
  { kulcs: '+', cim: 'Összeadás', jel: '+' },
  { kulcs: '-', cim: 'Kivonás', jel: '−' },
  { kulcs: '*', cim: 'Szorzás', jel: '×' },
  { kulcs: '/', cim: 'Osztás', jel: '÷' },
]

function szamra(ertek: string): number {
  const szam = Number(ertek.trim())
  return Number.isFinite(szam) ? szam : NaN
}

// A lebegőpontos kerekítési zajok (0.1 + 0.2) eltávolítása.
function simaEredmeny(ertek: number): number {
  return Number(ertek.toFixed(10))
}

export default function Calculator() {
  const [elsoSzam, setElsoSzam] = useState<string>('')
  const [masodikSzam, setMasodikSzam] = useState<string>('')
  const [muvelet, setMuvelet] = useState<Muvelet>('+')
  const [eredmeny, setEredmeny] = useState<number | null>(null)
  const [hiba, setHiba] = useState<string | null>(null)

  function valtozik<T>(setter: (value: T) => void, ertek: T): void {
    setter(ertek)
    setEredmeny(null)
    setHiba(null)
  }

  function szamolas(): void {
    setEredmeny(null)
    setHiba(null)

    if (elsoSzam.trim() === '' || masodikSzam.trim() === '') {
      setHiba('Kérlek, töltsd ki mindkét szám mezőt!')
      return
    }

    const a = szamra(elsoSzam)
    const b = szamra(masodikSzam)

    if (Number.isNaN(a)) {
      setHiba(`Az első mező nem tartalmaz érvényes számot: „${elsoSzam}”.`)
      return
    }
    if (Number.isNaN(b)) {
      setHiba(`A második mező nem tartalmaz érvényes számot: „${masodikSzam}”.`)
      return
    }
    if (muvelet === '/' && b === 0) {
      setHiba('Nullával nem lehet osztani!')
      return
    }

    let szam: number
    switch (muvelet) {
      case '+':
        szam = a + b
        break
      case '-':
        szam = a - b
        break
      case '*':
        szam = a * b
        break
      case '/':
        szam = a / b
        break
      default:
        setHiba('Ismeretlen művelet!')
        return
    }

    setEredmeny(simaEredmeny(szam))
  }

  const jel = MUVELETEK.find((m) => m.kulcs === muvelet)?.jel

  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-xl-6">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h2 className="h5 card-title mb-4">Számítás</h2>

              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="elso-szam" className="form-label">
                    Első szám
                  </label>
                  <input
                    id="elso-szam"
                    type="text"
                    inputMode="decimal"
                    className="form-control"
                    placeholder="pl. 12"
                    value={elsoSzam}
                    onChange={(e) => valtozik(setElsoSzam, e.target.value)}
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="masodik-szam" className="form-label">
                    Második szám
                  </label>
                  <input
                    id="masodik-szam"
                    type="text"
                    inputMode="decimal"
                    className="form-control"
                    placeholder="pl. 5"
                    value={masodikSzam}
                    onChange={(e) => valtozik(setMasodikSzam, e.target.value)}
                  />
                </div>
              </div>

              <fieldset className="mt-4">
                <legend className="form-label fs-6">Művelet</legend>
                <div className="d-flex flex-wrap gap-3">
                  {MUVELETEK.map((m) => (
                    <div className="form-check" key={m.kulcs}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="muvelet"
                        id={`muvelet-${m.kulcs}`}
                        value={m.kulcs}
                        checked={muvelet === m.kulcs}
                        onChange={(e) => valtozik(setMuvelet, e.target.value as Muvelet)}
                      />
                      <label className="form-check-label" htmlFor={`muvelet-${m.kulcs}`}>
                        {m.cim} ({m.jel})
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>

              <button type="button" className="btn btn-primary btn-lg w-100 mt-4" onClick={szamolas}>
                Számítás
              </button>

              {hiba ? (
                <div className="alert alert-danger mt-4 mb-0" role="alert">
                  {hiba}
                </div>
              ) : null}

              {eredmeny !== null ? (
                <div className="bg-dark text-white rounded p-3 mt-4 text-center" aria-live="polite">
                  <span className="d-block text-white-50">
                    {elsoSzam} {jel} {masodikSzam} =
                  </span>
                  <span className="d-block display-5 fw-bold text-break">{eredmeny}</span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
