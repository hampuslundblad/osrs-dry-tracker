import type { RegisterOptions } from "react-hook-form"
import type { FormData } from "@/types/form"

export const rateValidationRules: RegisterOptions<FormData, "rate"> = {
  required: "Rate is required",
  pattern: {
    value: /^[0-9]+\/[0-9]+$/,
    message: "Please enter the rate in the format X/Y",
  },
  validate: (value) => {
    const parts = value.split("/")

    if (parts.length === 2) {
      const numerator = parseFloat(parts[0])
      const denominator = parseFloat(parts[1])

      if (isNaN(numerator) || isNaN(denominator)) {
        return "Both parts must be valid numbers"
      }

      if (denominator === 0) {
        return "Denominator cannot be zero"
      }
    }
    return true
  },
}

export const killsValidationRules: RegisterOptions<FormData, "kills"> = {
  required: "Kills is required",
  pattern: {
    value: /^[0-9]+$/,
    message: "Kills must be a valid number",
  },
  validate: (value) => {
    const num = parseInt(value)

    if (isNaN(num)) {
      return "Kills must be a valid number"
    }

    if (num <= 0) {
      return "Kills must be greater than 0"
    }
    return true
  },
}
