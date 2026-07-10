type KeyPointItemProps = {
  percentage: string
  description: string
}

export default function KeyPointItem({
  percentage,
  description,
}: KeyPointItemProps) {
  return (
    <div className="flex items-center gap-5 border-t border-[#E3E3E8] py-2 first:border-t-0">
      <span className="w-[72px] shrink-0 text-[32px] font-bold leading-none text-[#EE6F4B] sm:text-[36px]">
        {percentage}
      </span>
      <p className="pt-1.5 leading-relaxed text-[#424153]">
        {description}
      </p>
    </div>
  )
}
