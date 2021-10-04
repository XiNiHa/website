import * as React from 'react'

type Props = {
  title: string
  children: React.ReactNode
}

const Section: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="flex flex-col items-end gap-5">
      <h2 className="font-title text-fill-3 text-xl md:text-3xl">{title}</h2>
      <ul className="flex flex-col items-end gap-5">{children}</ul>
    </div>
  )
}

export default Section
