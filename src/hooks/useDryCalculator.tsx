import { useState } from "react"
import { useForm } from "react-hook-form"
import type { FormData } from "@/types/form"
import {
  calculateProbabilityOfAchievingAtLeastOne,
  parseRate,
} from "@/lib/calculations"

export function useDryCalculator() {
  const [probabilityOfDrop, setProbabilityOfDrop] = useState<number | null>(
    null,
  )

  const form = useForm<FormData>({
    mode: "all",
    defaultValues: {
      rate: "",
      kills: "",
    },
  })

  const killsValue = form.watch("kills")

  const onSubmit = (data: FormData) => {
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
    killsValue,
    onSubmit,
  }
}
