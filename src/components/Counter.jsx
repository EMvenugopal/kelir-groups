import { useEffect, useState } from 'react'

export default function Counter({ to, suffix = '', duration = 1400 }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    let raf
    let start
    const tick = (t) => {
      if (!start) start = t
      const p = Math.min((t - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.floor(eased * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [to, duration])
  return (
    <>
      {n}
      {suffix}
    </>
  )
}
