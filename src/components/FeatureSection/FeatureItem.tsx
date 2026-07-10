type FeatureItemProps = {
  title: string
  description: string
  icon: string
  side: 'left' | 'right'
}

export default function FeatureItem({
  title,
  description,
  icon,
  side,
}: FeatureItemProps) {
  const facesCenter = side === 'left'

  return (
    <div
      className={`flex gap-6 ${
        facesCenter
          ? 'flex-row lg:flex-row-reverse lg:text-right'
          : 'flex-row lg:text-left'
      }`}
    >
      <div className="h-15 w-15 shrink-0">
        <img
          src={icon}
          alt=""
          className="h-full w-full object-contain"
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="max-w-55">
        <h3 className="text-[19px] font-semibold leading-snug text-ink">{title}</h3>
        <p className="mt-2 leading-relaxed text-body">{description}</p>
      </div>
    </div>
  )
}
