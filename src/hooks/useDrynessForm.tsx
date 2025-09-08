import { useState } from "react"
import { useForm } from "react-hook-form"
import {
  calculateProbabilityOfAchievingAtLeastOne,
  parseRate,
} from "@/lib/calculations"

export interface FormData {
  rate: string
  kills: string
}

export function useDrynessForm({
  rate: defaultRate,
  kills: defaultKills,
}: FormData) {
  const [probabilityOfDrop, setProbabilityOfDrop] = useState<number | null>(
    null,
  )

  const form = useForm<FormData>({
    mode: "all",
    defaultValues: {
      rate: defaultRate,
      kills: defaultKills,
    },
  })

  const submit = (data: FormData) => {
    const dropRate = parseRate(data.rate)
    const killCount = parseInt(data.kills)

    if (!isNaN(dropRate) && !isNaN(killCount)) {
      const probability = calculateProbabilityOfAchievingAtLeastOne(
        killCount,
        dropRate,
      )
      setProbabilityOfDrop(probability)
    }
  }

  return {
    form,
    probabilityOfDrop,
    submit,
  }
}
