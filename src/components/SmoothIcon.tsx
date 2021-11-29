import * as React from 'react'

type Props = {
  iconUrl: string
  iconAlt: string
  className?: string
  iconClassName?: string
}

const SmoothIcon: React.FC<Props> = ({ iconUrl, iconAlt, className }) => {
  const [visible, setVisible] = React.useState(false)
  const imageRef = React.useRef<HTMLImageElement>(null)

  React.useEffect(() => {
    const listener = () => setVisible(true)
    const currentImageRef = imageRef.current
    currentImageRef?.addEventListener('load', listener)
    return () => currentImageRef?.removeEventListener('load', listener)
  }, [setVisible])

  return (
    <span className={className}>
      <img
        ref={imageRef}
        src={iconUrl}
        alt={iconAlt}
        className="h-full transition-opacity duration-500"
        style={{ opacity: visible ? 1 : 0 }}
      />
    </span>
  )
}

export default SmoothIcon
