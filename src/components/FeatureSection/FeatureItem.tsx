import type { ReactNode } from 'react'

type FeatureItemProps = {
  title: string
  description: string
  icon: ReactNode
  iconBg: string
  align: 'left' | 'right'
}

export default function FeatureItem({
  title,
  description,
  icon,
  iconBg,
  align,
}: FeatureItemProps) {
  const isLeft = align === 'left'

  return (
    <div
      className={`flex items-center gap-4 ${
        isLeft
          ? 'flex-row lg:flex-row-reverse lg:text-right'
          : 'flex-row lg:text-left'
      }`}
    >
      <div
        className={`flex size-12 shrink-0 items-center justify-center rounded-full ${iconBg}`}
      >
        {icon}
      </div>
      <div className="max-w-[220px]">
        <h3 className="text-base font-bold leading-snug text-[#2D2D2D]">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-[#9B9B9B]">
          {description}
        </p>
      </div>
    </div>
  )
}
