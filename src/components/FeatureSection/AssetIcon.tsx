type AssetIconProps = {
  src: string
  className?: string
}

export default function AssetIcon({ src, className = 'w-auto' }: AssetIconProps) {
  return <img src={src} alt="" className={className} aria-hidden="true" />
}
