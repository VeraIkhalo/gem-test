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
      <div
        className={`overflow-hidden rounded-2xl ${
          reverse ? 'order-1 lg:order-2' : 'order-1'
        }`}
      >
        <img
          src={image}
          alt={imageAlt}
          className="aspect-[4/3] w-full object-cover object-center sm:aspect-[16/11]"
        />
      </div>

      <div
        className={`flex flex-col justify-center ${
          reverse ? 'order-2 lg:order-1' : 'order-2'
        }`}
      >
        <h2 className="text-[24px] font-bold leading-[1.3] tracking-tight text-[#111827] sm:text-[28px] lg:text-[32px]">
          {title}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#6B7280] sm:text-[15px] lg:mt-5">
          {description}
        </p>
      </div>
    </div>
  )
}
