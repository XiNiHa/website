import * as React from 'react'

type Props = {
  className?: string
  containerClassName?: string
  children: React.ReactNode
}

type ContainerStats = {
  offsetHeight: number
  scrollHeight: number
  scrollTop: number
}

type DragStats = {
  dragStartPos: number
  dragStartTop: number
}

const ScrollArea: React.FC<Props> = ({ className, containerClassName, children }) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const innerRef = React.useRef<HTMLDivElement>(null)
  const [containerStats, setContainerStats] = React.useState<ContainerStats>({
    offsetHeight: 0,
    scrollHeight: 0,
    scrollTop: 0,
  })
  const [dragStats, setDragStats] = React.useState<DragStats | null>(null)
  const resizeObserver = React.useRef<ResizeObserver | null>(null)
  const mMoveHandlerRef = React.useRef<((e: MouseEvent) => void) | null>(null)

  React.useEffect(() => {
    if (containerRef.current && innerRef.current) {
      const updateContainerStats = () =>
        setContainerStats({
          offsetHeight: containerRef.current?.offsetHeight ?? 0,
          scrollHeight: containerRef.current?.scrollHeight ?? 0,
          scrollTop: containerRef.current?.scrollTop ?? 0,
        })

      const currentContainer = containerRef.current
      const currentInner = innerRef.current

      currentContainer.addEventListener('scroll', updateContainerStats)
      resizeObserver.current = new ResizeObserver(updateContainerStats)
      resizeObserver.current.observe(currentInner)

      return () => {
        currentContainer.removeEventListener('scroll', updateContainerStats)
        resizeObserver.current?.unobserve(currentInner)
      }
    }
  }, [containerRef.current, innerRef.current])

  React.useEffect(() => {
    mMoveHandlerRef.current = (e: MouseEvent) => {
      if (dragStats) {
        const diff = e.screenY - dragStats.dragStartPos
        const diffRatio = diff / containerStats.offsetHeight

        containerRef.current?.scrollTo({
          top: dragStats.dragStartTop + diffRatio * containerStats.scrollHeight,
        })
      }
    }
  }, [dragStats, containerStats])

  React.useEffect(() => {
    const mouseupHandler = () => setDragStats(null)
    document.addEventListener('mouseup', mouseupHandler)
    return () => document.removeEventListener('mouseup', mouseupHandler)
  }, [setDragStats])

  React.useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => mMoveHandlerRef.current?.(e)
    document.addEventListener('mousemove', mouseMoveHandler)
    return () => document.removeEventListener('mousemove', mouseMoveHandler)
  }, [])

  const shouldShowScroll =
    containerStats.scrollHeight > containerStats.offsetHeight

  return (
    <div className={className + ' flex'}>
      <div
        ref={containerRef}
        className={containerClassName + ' flex-grow overflow-y-auto no-scrollbar'}
      >
        <div ref={innerRef} className="max-w-full">{children}</div>
      </div>
      <div
        className={
          'mx-1 w-4 overflow-visible transition-opacity ' +
          (shouldShowScroll ? 'opacity-100' : 'opacity-0')
        }
        style={{ height: `${containerStats.offsetHeight}px` }}
        onMouseDown={e => {
          e.preventDefault()
          setDragStats({
            dragStartPos: e.screenY,
            dragStartTop: containerRef.current?.scrollTop ?? 0,
          })
        }}
      >
        <div
          className={`w-1.5 rounded-full hover:bg-[#999999] transition-colors ${
            dragStats == null ? 'bg-[#777777]' : 'bg-[#999999]'
          }`}
          style={{
            height: `${
              containerStats.offsetHeight *
              (containerStats.offsetHeight / containerStats.scrollHeight)
            }px`,
            marginTop: `${
              containerStats.offsetHeight *
              (containerStats.scrollTop / containerStats.scrollHeight)
            }px`,
          }}
        />
      </div>
    </div>
  )
}

export default ScrollArea
