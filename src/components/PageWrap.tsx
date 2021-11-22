import * as React from 'react'
import ScrollArea from './ScrollArea'

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
    <ScrollArea
      className={'h-full transition-opacity duration-500 ' + getClassName()}
      containerClassName="max-w-full h-full text-right transition-opacity duration-500 flex flex-col items-end p-4 h-full lg:max-h-[70vh]"
    >
      {children}
    </ScrollArea>
  )
}

export default PageWrap
