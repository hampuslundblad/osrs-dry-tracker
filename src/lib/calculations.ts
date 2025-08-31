export const calculateProbabilityOfAchievingAtLeastOne = (
  trials: number,
  probability: number,
): number => {
  return 1 - (1 - probability) ** trials
}

export const parseRate = (rate: string): number => {
  const parts = rate.split("/")
  if (parts.length === 2) {
    const numerator = parseFloat(parts[0])
    const denominator = parseFloat(parts[1])
    if (!isNaN(numerator) && !isNaN(denominator) && denominator !== 0) {
      return numerator / denominator
    }
  }
  return 0
}
