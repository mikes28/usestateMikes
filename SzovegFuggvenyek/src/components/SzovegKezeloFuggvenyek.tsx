import { useState } from 'react'

// Szókezdő nagybetűs: minden szó első betűje nagy, a többi kisbetűs.
export function szoKezdoNagybetus(szoveg: string): string {
  return szoveg
    .toLowerCase()
    .replace(/\S+/g, (szo) => szo.charAt(0).toUpperCase() + szo.slice(1))
}

// Mondatkezdő nagybetűs: a szöveg kisbetűs, de minden mondat első betűje nagy.
export function mondatKezdoNagybetus(szoveg: string): string {
  return szoveg.toLowerCase().replace(/(^|[.!?]\s*)([a-z])/g, (_m, elso, betu) => elso + betu.toUpperCase())
}

// A karakterek fordított sorrendben.
export function forditottSzo(szoveg: string): string {
  return [...szoveg].reverse().join('')
}

export default function SzovegKezeloFuggvenyek() {
  const [bevitel, setBevitel] = useState<string>('')
  const [eredmeny, setEredmeny] = useState<string>('')
  const [forditva, setForditva] = useState<boolean>(false)

  const kijelzett = forditva ? forditottSzo(eredmeny) : eredmeny

  function bevitele(valtozas: string): void {
    setBevitel(valtozas)
    setEredmeny(valtozas)
  }

  function visszaallit(): void {
    setBevitel('')
    setEredmeny('')
    setForditva(false)
  }

  return (
    <section className="container py-5">
      <div className="row g-4">
        <div className="col-lg-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h2 className="h5 card-title">Szövegbevitel</h2>
              <label htmlFor="szoveg-bevitel" className="form-label">
                Írj be egy szöveget!
              </label>
              <textarea
                id="szoveg-bevitel"
                className="form-control"
                rows={8}
                value={bevitel}
                placeholder="Írd be a szöveget…"
                onChange={(e) => bevitele(e.target.value)}
              />
              <p className="mt-3 mb-0 text-secondary">
                {bevitel.length === 0
                  ? 'Még nem írt be egyetlen karaktert sem.'
                  : `A beírt karakterek száma: ${bevitel.length}.`}
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h2 className="h5 card-title">Megjelenített szöveg</h2>
              <div
                className="bg-body-tertiary border rounded p-3 mb-3 text-break"
                style={{ minHeight: '12rem', whiteSpace: 'pre-wrap' }}
                aria-live="polite"
              >
                {kijelzett.length > 0 ? (
                  kijelzett
                ) : (
                  <span className="text-secondary fst-italic">Nincs megjelenített szöveg.</span>
                )}
              </div>

              <h3 className="h6 text-uppercase text-secondary">Alapműveletek</h3>
              <div className="d-flex flex-wrap gap-2 mb-4">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setEredmeny((szoveg) => szoveg.toUpperCase())}
                >
                  Nagybetűs
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setEredmeny((szoveg) => szoveg.toLowerCase())}
                >
                  Kisbetűs
                </button>
                <button type="button" className="btn btn-outline-secondary" onClick={visszaallit}>
                  Visszaállít
                </button>
              </div>

              <h3 className="h6 text-uppercase text-secondary">Haladó műveletek</h3>
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => setEredmeny((szoveg) => szoKezdoNagybetus(szoveg))}
                >
                  Szókezdő nagybetűs
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => setEredmeny((szoveg) => mondatKezdoNagybetus(szoveg))}
                >
                  Mondatkezdő nagybetűs
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => setForditva(true)}
                >
                  Szövegirány visszafelé
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => setForditva(false)}
                >
                  Szövegirány normál
                </button>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => setForditva((allapot) => !allapot)}
                >
                  Szövegirány kapcsoló ({forditva ? 'visszafelé' : 'normál'})
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
