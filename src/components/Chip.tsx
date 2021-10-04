import * as React from 'react'

type Props = {
  isActive: boolean
  iconUrl: string
  text: string
  onClick: () => void
}

const Chip: React.FC<Props> = ({ isActive, iconUrl, text, onClick }) => {
  return (
    <button
      className={
        'flex items-center gap-2 h-8 xs:h-10 px-2.5 xs:px-4 py-1 xs:py-2 rounded-full bg-[#d2d2d2] border font-sans text-lg xs:text-xl text-fill-3 transition-all duration-500 ' +
        (isActive
          ? 'border-fill-c shadow'
          : 'border-transparent opacity-70 hover:opacity-100')
      }
      onClick={onClick}
    >
      <img src={iconUrl} alt={`${text} icon`} className="h-full" />
      {text}
    </button>
  )
}

export default Chip
