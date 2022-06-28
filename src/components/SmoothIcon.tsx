import * as React from 'react'

type Props = {
  iconUrl: string
  iconAlt: string
  className?: string
  iconClassName?: string
}

const SmoothIcon: React.FC<Props> = ({ iconUrl, iconAlt, className }) => {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const image = new Image()
    image.addEventListener('load', () => setVisible(true))
    image.src ||= iconUrl
  }, [])

  return (
    <span className={className}>
      <img
        src={visible ? iconUrl : undefined}
        alt={iconAlt}
        className="h-full transition-opacity duration-500"
        style={{ opacity: visible ? 1 : 0 }}
      />
    </span>
  )
}

export default SmoothIcon
