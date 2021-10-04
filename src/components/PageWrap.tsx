import * as React from 'react'

type TransitionStatus = 'entering' | 'entered' | 'exiting' | 'exited'

type Props = {
  children: React.ReactNode
  transitionStatus: TransitionStatus
}

export type TransitionProps = {
  transitionStatus: TransitionStatus
}

const PageWrap: React.FC<Props> = ({ children, transitionStatus }) => {
  const getClassName = () => {
    switch (transitionStatus) {
      case 'entered':
        return 'opacity-100'
      default:
        return 'opacity-0'
    }
  }

  return (
    <div
      className={
        'max-w-full transition-opacity duration-500 text-right flex flex-col items-end my-4 px-6 h-full lg:max-h-[70vh] overflow-y-auto ' +
        getClassName()
      }
    >
      {children}
    </div>
  )
}

export default PageWrap
