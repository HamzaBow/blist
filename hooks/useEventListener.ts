import { useEffect, useRef } from "react"

export default function useEventListener(
  eventType: keyof WindowEventMap,
  callback: Function,
  element: HTMLElement |  Window & typeof globalThis | null = window
) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (element == null) return
    const handler = (e: Event) => callbackRef.current(e)
    element.addEventListener(eventType, handler)

    return () => element.removeEventListener(eventType, handler)
  }, [eventType, element])
}
