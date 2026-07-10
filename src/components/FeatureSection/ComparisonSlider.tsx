import { useCallback, useEffect, useRef, useState, type PointerEvent } from 'react'
import bowlRaw from '../../assets/bowl-raw.svg'
import bowlKibble from '../../assets/bowl-kibble.svg'

export default function ComparisonSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    containerRef.current?.style.setProperty('--slider-position', `${position}%`)
  }, [position])

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100)
    setPosition(percentage)
    container.style.setProperty('--slider-position', `${percentage}%`)
  }, [])

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
    updatePosition(event.clientX)
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    updatePosition(event.clientX)
  }

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    setIsDragging(false)
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  return (
    <div
      ref={containerRef}
      className="comparison-slider relative mx-auto size-[280px] shrink-0 cursor-col-resize select-none sm:size-[340px] lg:size-[380px]"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      role="slider"
      aria-label="Compare raw food and kibble"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') {
          setPosition((prev) => {
            const next = Math.max(prev - 2, 0)
            containerRef.current?.style.setProperty('--slider-position', `${next}%`)
            return next
          })
        }
        if (event.key === 'ArrowRight') {
          setPosition((prev) => {
            const next = Math.min(prev + 2, 100)
            containerRef.current?.style.setProperty('--slider-position', `${next}%`)
            return next
          })
        }
      }}
    >
      <img
        src={bowlKibble}
        alt="Dry kibble dog food in a bowl"
        className="absolute inset-0 size-full rounded-full object-cover shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
        draggable={false}
      />

      <div className="comparison-slider-overlay absolute inset-0 overflow-hidden rounded-full">
        <img
          src={bowlRaw}
          alt="Fresh raw dog food in a bowl"
          className="absolute inset-0 size-full object-cover"
          draggable={false}
        />
      </div>

      <div className="comparison-slider-divider absolute inset-y-0 w-0.5 -translate-x-1/2 bg-[#E89876]">
        <div className="absolute top-1/2 left-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
            <path d="M4 1L1 5l3 4" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 1l3 4-3 4" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}
