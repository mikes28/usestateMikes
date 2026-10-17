import { useState } from 'react'
import KepBetolto from './KepBetolto.tsx'

const IZZO_BE = '/kepek/pic_bulbon.gif'
const IZZO_KI = '/kepek/pic_bulboff.gif'

export default function ReactKapcsolo() {
  const [bekapcsolva, setBekapcsolva] = useState<boolean>(false)

  const allapot = bekapcsolva ? 'Be' : 'Ki'

  return (
    <section className="container py-5">
      <div className="card shadow-sm mx-auto text-center" style={{ maxWidth: '30rem' }}>
        <div className="card-body p-4">
          <h2 className="h6 text-secondary text-uppercase">A kapcsoló állapota</h2>

          <button
            type="button"
            className={`btn rounded-circle d-inline-flex align-items-center justify-content-center ${
              bekapcsolva ? 'btn-success' : 'btn-secondary'
            }`}
            style={{ width: '8rem', height: '8rem', fontSize: '2.4rem', fontWeight: 700 }}
            onClick={() => setBekapcsolva((elozo) => !elozo)}
            aria-pressed={bekapcsolva}
          >
            {allapot}
          </button>

          <p className="mt-3 mb-0">
            Az izzó jelenlegi állapota: <strong>{allapot}</strong>
          </p>

          <KepBetolto
            src={bekapcsolva ? IZZO_BE : IZZO_KI}
            alt={bekapcsolva ? 'Bekapcsolt izzó' : 'Kikapcsolt izzó'}
          />
        </div>
      </div>
    </section>
  )
}
