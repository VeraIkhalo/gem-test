type KeyPointItemProps = {
  percentage: string
  description: string
}

export default function KeyPointItem({
  percentage,
  description,
}: KeyPointItemProps) {
  return (
    <div className="flex items-start gap-5 border-t border-[#E5E7EB] py-5">
      <span className="w-[72px] shrink-0 text-[32px] font-bold leading-none text-[#D07A56] sm:text-[36px]">
        {percentage}
      </span>
      <p className="pt-1.5 text-sm leading-relaxed text-[#6B7280]">
        {description}
      </p>
    </div>
  )
}
