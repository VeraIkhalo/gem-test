type FeatureRowProps = {
  title: string
  description: string
  image: string
  imageAlt: string
  reverse?: boolean
}

export default function FeatureRow({
  title,
  description,
  image,
  imageAlt,
  reverse = false,
}: FeatureRowProps) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14 xl:gap-20">
      <div className={`overflow-hidden rounded-2xl ${reverse ? 'lg:order-2' : ''}`}>
        <img
          src={image}
          alt={imageAlt}
          className="aspect-[4/3] w-full object-cover sm:aspect-[16/11]"
        />
      </div>

      <div className={reverse ? 'lg:order-1' : ''}>
        <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-ink lg:text-[40px]">
          {title}
        </h2>
        <p className="mt-4 leading-relaxed text-body sm:text-[15px] lg:mt-5">
          {description}
        </p>
      </div>
    </div>
  )
}
