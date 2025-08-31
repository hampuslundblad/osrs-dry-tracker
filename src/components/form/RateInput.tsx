import type { FieldErrors, UseFormRegister } from "react-hook-form"
import type { FormData } from "@/types/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { rateValidationRules } from "@/lib/validation"

interface RateInputProps {
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>
}

export function RateInput({ register, errors }: RateInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-primary">Rate</Label>
      <Input
        className="text-primary"
        placeholder="e.g., 1/512"
        {...register("rate", rateValidationRules)}
      />
      {errors.rate && (
        <div className="text-red-500 text-sm">{errors.rate.message}</div>
      )}
    </div>
  )
}
