import { useState, type FormEvent } from 'react'

interface CipoRekord {
  id: number
  marka: string
  modell: string
  tipus: string
  meret: number
  ar: number
  szin: string
  anyag: string
}

// Az űrlap minden mezője szövegként kezelendő, a mentéskor alakul számmá.
interface UjRekord {
  id: string
  marka: string
  modell: string
  tipus: string
  meret: string
  ar: string
  szin: string
  anyag: string
}

type RendezesiMezo = 'marka' | 'modell' | 'tipus' | 'meret' | 'ar'
type Hibak = Partial<Record<string, string>>

const KEZDO_REKORDOK: CipoRekord[] = [
  { id: 1, marka: 'Adidas', modell: 'Samba OG', tipus: 'Torncipő', meret: 42, ar: 32900, szin: 'Fekete/Fehér', anyag: 'Bőr' },
  { id: 2, marka: 'Nike', modell: 'Air Force 1 07', tipus: 'Sneaker', meret: 43, ar: 47900, szin: 'Fehér', anyag: 'Bőr' },
  { id: 3, marka: 'New Balance', modell: '550', tipus: 'Sneaker', meret: 42, ar: 42900, szin: 'Szürke', anyag: 'Bőr' },
  { id: 4, marka: 'Vans', modell: 'Classic Canvas', tipus: 'Tornaúhúzó', meret: 40, ar: 18900, szin: 'Fekete', anyag: 'Vászon' },
  { id: 5, marka: 'Converse', modell: 'Chuck Taylor All Star', tipus: 'Sneaker', meret: 41, ar: 24900, szin: 'Kék', anyag: 'Vászon' },
  { id: 6, marka: 'Salomon', modell: 'XT-6', tipus: 'Futócipő', meret: 43, ar: 52900, szin: 'Zöld', anyag: 'Szintetikus' },
  { id: 7, marka: 'Puma', modell: 'Suede Classic', tipus: 'Sneaker', meret: 42, ar: 21900, szin: 'Barna', anyag: 'Velúr' },
]

const TIPUSOK: string[] = ['Torncipő', 'Sneaker', 'Futócipő', 'Tornaúhúzó', 'Papucs', 'Bakancs']

const SZIN_EK: UjRekord = {
  id: '',
  marka: '',
  modell: '',
  tipus: 'Sneaker',
  meret: '',
  ar: '',
  szin: '',
  anyag: '',
}

const RENDEZESI_MEZOK: { kulcs: RendezesiMezo; cim: string }[] = [
  { kulcs: 'marka', cim: 'Márka' },
  { kulcs: 'modell', cim: 'Modell' },
  { kulcs: 'tipus', cim: 'Típus' },
  { kulcs: 'meret', cim: 'Méret' },
  { kulcs: 'ar', cim: 'Ár' },
]

export function penz(ertek: number): string {
  return `${ertek.toLocaleString('hu-HU')} Ft`
}

export default function CipokNyilvantarto() {
  const [rekordok, setRekordok] = useState<CipoRekord[]>(KEZDO_REKORDOK)
  const [kereso, setKereso] = useState<string>('')
  const [szures, setSzures] = useState<string>('')
  const [rendezoMezo, setRendezoMezo] = useState<RendezesiMezo>('ar')
  const [csokkeno, setCsokkeno] = useState<boolean>(false)
  const [ujRekord, setUjRekord] = useState<UjRekord>(SZIN_EK)
  const [hibak, setHibak] = useState<Hibak>({})
  const [sikeres, setSikeres] = useState<string | null>(null)

  const szurtRekordok = rekordok.filter((rekord) => {
    const kulcs = szures.trim().toLowerCase()
    if (!kulcs) return true
    return [rekord.marka, rekord.modell, rekord.tipus, rekord.szin, rekord.anyag].some((mező) =>
      mező.toLowerCase().includes(kulcs),
    )
  })

  const rendezettRekordok = [...szurtRekordok].sort((a, b) => {
    const ertekA = a[rendezoMezo]
    const ertekB = b[rendezoMezo]
    const hasonlito =
      typeof ertekA === 'number' && typeof ertekB === 'number'
        ? ertekA - ertekB
        : String(ertekA).localeCompare(String(ertekB), 'hu')
    return csokkeno ? -hasonlito : hasonlito
  })

  const atlagAr = rendezettRekordok.length
    ? rendezettRekordok.reduce((osszeg, rekord) => osszeg + rekord.ar, 0) / rendezettRekordok.length
    : 0

  function keresesIndulasa(): void {
    setSzures(kereso)
  }

  function mezoValtozik(mezo: keyof UjRekord, ertek: string): void {
    setUjRekord((rekord) => ({ ...rekord, [mezo]: ertek }) as UjRekord)
    setHibak((hibak) => ({ ...hibak, [mezo]: undefined }))
    setSikeres(null)
  }

  function rekordHozzaadas(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    const ujHibak: Hibak = {}
    const marka = ujRekord.marka.trim()
    const modell = ujRekord.modell.trim()
    const szin = ujRekord.szin.trim()
    const anyag = ujRekord.anyag.trim()
    const meret = Number(ujRekord.meret)
    const ar = Number(ujRekord.ar)

    if (!marka) ujHibak.marka = 'A márka megadása kötelező!'
    if (!modell) ujHibak.modell = 'A modell megadása kötelező!'
    if (!ujRekord.tipus) ujHibak.tipus = 'Válassz típust!'
    if (!szin) ujHibak.szin = 'A szín megadása kötelező!'
    if (!anyag) ujHibak.anyag = 'Az anyag megadása kötelező!'

    if (ujRekord.meret === '' || !Number.isFinite(meret)) {
      ujHibak.meret = 'Adj meg egy érvényes számot a méret mezőben!'
    } else if (meret < 30 || meret > 50) {
      ujHibak.meret = 'A méret 30 és 50 közötti szám lehet!'
    }

    if (ujRekord.ar === '' || !Number.isFinite(ar)) {
      ujHibak.ar = 'Adj meg egy érvényes számot az ár mezőben!'
    } else if (ar <= 0) {
      ujHibak.ar = 'Az ár pozitív szám kell legyen!'
    }

    setHibak(ujHibak)

    if (Object.keys(ujHibak).length > 0) {
      setSikeres(null)
      return
    }

    const kovetkezoId = rekordok.reduce((legnagyobb, rekord) => Math.max(legnagyobb, rekord.id), 0) + 1
    const rekord: CipoRekord = {
      id: kovetkezoId,
      marka,
      modell,
      tipus: ujRekord.tipus,
      meret,
      ar,
      szin,
      anyag,
    }

    setRekordok((rekordok) => [...rekordok, rekord])
    setUjRekord(SZIN_EK)
    setSikeres(`A(z) ${rekord.marka} ${rekord.modell} cipő felvétele sikeres volt.`)
  }

  return (
    <section className="container py-5">
      <div className="row g-4">
        <div className="col-xl-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="h5 card-title">Cipő nyilvántartás</h2>

              <div className="row g-3 align-items-end my-1">
                <div className="col-md-6">
                  <label htmlFor="kereso" className="form-label">
                    Keresés
                  </label>
                  <div className="input-group">
                    <input
                      id="kereso"
                      type="text"
                      className="form-control"
                      placeholder="Keresés márka, modell, típus, szín vagy anyag szerint…"
                      value={kereso}
                      onChange={(e) => {
                        setKereso(e.target.value)
                        setSzures(e.target.value)
                      }}
                    />
                    <button type="button" className="btn btn-primary" onClick={keresesIndulasa}>
                      Keresés
                    </button>
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="rendezo-mezo" className="form-label">
                    Rendezés mező
                  </label>
                  <select
                    id="rendezo-mezo"
                    className="form-select"
                    value={rendezoMezo}
                    onChange={(e) => setRendezoMezo(e.target.value as RendezesiMezo)}
                  >
                    {RENDEZESI_MEZOK.map((mezo) => (
                      <option key={mezo.kulcs} value={mezo.kulcs}>
                        {mezo.cim}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-3">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="rendezo-irány"
                      checked={csokkeno}
                      onChange={(e) => setCsokkeno(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="rendezo-irány">
                      Csökkenő sorrend
                    </label>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table table-striped table-hover align-middle mb-0">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Márka</th>
                      <th scope="col">Modell</th>
                      <th scope="col">Típus</th>
                      <th scope="col">Méret</th>
                      <th scope="col">Ár</th>
                      <th scope="col">Szín</th>
                      <th scope="col">Anyag</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rendezettRekordok.map((rekord) => (
                      <tr key={rekord.id}>
                        <th scope="row">{rekord.id}</th>
                        <td>{rekord.marka}</td>
                        <td>{rekord.modell}</td>
                        <td>{rekord.tipus}</td>
                        <td>{rekord.meret}</td>
                        <td>{penz(rekord.ar)}</td>
                        <td>{rekord.szin}</td>
                        <td>{rekord.anyag}</td>
                      </tr>
                    ))}
                    {rendezettRekordok.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="text-center text-secondary py-4">
                          Nincs a keresésnek megfelelő rekord.
                        </td>
                      </tr>
                    ) : null}
                  </tbody>
                  <tfoot>
                    <tr className="table-light">
                      <th scope="row" colSpan={4}>
                        Összegzés ({rendezettRekordok.length} rekord)
                      </th>
                      <td colSpan={2}>Átlagos ár: {penz(Math.round(atlagAr))}</td>
                      <td colSpan={2}>
                        Rendezés: {RENDEZESI_MEZOK.find((m) => m.kulcs === rendezoMezo)?.cim}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="h5 card-title">Új cipő felvétele</h2>

              {sikeres ? (
                <div className="alert alert-success" role="alert">
                  {sikeres}
                </div>
              ) : null}

              <form onSubmit={rekordHozzaadas} noValidate>
                <div className="mb-3">
                  <label htmlFor="uj-marka" className="form-label">
                    Márka *
                  </label>
                  <input
                    id="uj-marka"
                    type="text"
                    className={`form-control ${hibak.marka ? 'is-invalid' : ''}`}
                    value={ujRekord.marka}
                    onChange={(e) => mezoValtozik('marka', e.target.value)}
                  />
                  {hibak.marka ? <div className="invalid-feedback">{hibak.marka}</div> : null}
                </div>

                <div className="mb-3">
                  <label htmlFor="uj-modell" className="form-label">
                    Modell *
                  </label>
                  <input
                    id="uj-modell"
                    type="text"
                    className={`form-control ${hibak.modell ? 'is-invalid' : ''}`}
                    value={ujRekord.modell}
                    onChange={(e) => mezoValtozik('modell', e.target.value)}
                  />
                  {hibak.modell ? <div className="invalid-feedback">{hibak.modell}</div> : null}
                </div>

                <div className="mb-3">
                  <label htmlFor="uj-tipus" className="form-label">
                    Típus *
                  </label>
                  <select
                    id="uj-tipus"
                    className={`form-select ${hibak.tipus ? 'is-invalid' : ''}`}
                    value={ujRekord.tipus}
                    onChange={(e) => mezoValtozik('tipus', e.target.value)}
                  >
                    {TIPUSOK.map((tipus) => (
                      <option key={tipus} value={tipus}>
                        {tipus}
                      </option>
                    ))}
                  </select>
                  {hibak.tipus ? <div className="invalid-feedback">{hibak.tipus}</div> : null}
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-6">
                    <label htmlFor="uj-meret" className="form-label">
                      Méret *
                    </label>
                    <input
                      id="uj-meret"
                      type="number"
                      min="30"
                      max="50"
                      className={`form-control ${hibak.meret ? 'is-invalid' : ''}`}
                      value={ujRekord.meret}
                      onChange={(e) => mezoValtozik('meret', e.target.value)}
                    />
                    {hibak.meret ? <div className="invalid-feedback">{hibak.meret}</div> : null}
                  </div>
                  <div className="col-6">
                    <label htmlFor="uj-ar" className="form-label">
                      Ár (Ft) *
                    </label>
                    <input
                      id="uj-ar"
                      type="number"
                      min="0"
                      className={`form-control ${hibak.ar ? 'is-invalid' : ''}`}
                      value={ujRekord.ar}
                      onChange={(e) => mezoValtozik('ar', e.target.value)}
                    />
                    {hibak.ar ? <div className="invalid-feedback">{hibak.ar}</div> : null}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="uj-szin" className="form-label">
                    Szín *
                  </label>
                  <input
                    id="uj-szin"
                    type="text"
                    className={`form-control ${hibak.szin ? 'is-invalid' : ''}`}
                    value={ujRekord.szin}
                    onChange={(e) => mezoValtozik('szin', e.target.value)}
                  />
                  {hibak.szin ? <div className="invalid-feedback">{hibak.szin}</div> : null}
                </div>

                <div className="mb-4">
                  <label htmlFor="uj-anyag" className="form-label">
                    Anyag *
                  </label>
                  <input
                    id="uj-anyag"
                    type="text"
                    className={`form-control ${hibak.anyag ? 'is-invalid' : ''}`}
                    value={ujRekord.anyag}
                    onChange={(e) => mezoValtozik('anyag', e.target.value)}
                  />
                  {hibak.anyag ? <div className="invalid-feedback">{hibak.anyag}</div> : null}
                </div>

                <button type="submit" className="btn btn-success w-100">
                  Rekord hozzáadása
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
