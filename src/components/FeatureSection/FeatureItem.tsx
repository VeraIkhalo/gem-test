import type { ReactNode } from 'react'

type FeatureItemProps = {
  title: string
  description: string
  icon: ReactNode | null
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
      className={`flex gap-6 ${
        isLeft
          ? 'flex-row lg:flex-row-reverse lg:text-right'
          : 'flex-row lg:text-left'
      }`}
    >
      <div
        className="w-[100%] max-w-[60px] h-[60px]"
      >
        {icon}
      </div>
      <div className="w-[100%] max-w-[220px]">
        <h3 className="text-[19px] font-semibold leading-snug text-[#161723]">
          {title}
        </h3>
        <p className="mt-2 leading-relaxed text-[#424153]">
          {description}
        </p>
      </div>
    </div>
  )
}
