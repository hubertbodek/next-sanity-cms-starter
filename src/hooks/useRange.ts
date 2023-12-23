import { useMemo } from 'react'

export default function useRange(
  num: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) {
  const mappedValue = useMemo(() => {
    const newValue = ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
    const largest = Math.max(outMin, outMax)
    const smallest = Math.min(outMin, outMax)

    return Math.min(Math.max(newValue, smallest), largest)
  }, [num])

  return mappedValue
}
