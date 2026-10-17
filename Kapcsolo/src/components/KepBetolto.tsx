interface KepBetoltoProps {
  src: string
  alt: string
}

export default function KepBetolto({ src, alt }: KepBetoltoProps) {
  return (
    <figure className="mt-4 mb-0">
      <img
        src={src}
        alt={alt}
        className="img-thumbnail bg-white"
        style={{ width: '10rem', height: '10rem', objectFit: 'contain' }}
      />
      <figcaption className="small text-secondary mt-2">{alt}</figcaption>
    </figure>
  )
}
