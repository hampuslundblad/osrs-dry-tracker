import type { FieldErrors, UseFormRegister } from "react-hook-form"
import type { FormData } from "@/types/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { killsValidationRules } from "@/lib/validation"

interface KillsInputProps {
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>
}

export function KillsInput({ register, errors }: KillsInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-primary">Kills</Label>
      <Input
        className="text-primary"
        placeholder="e.g., 1000"
        {...register("kills", killsValidationRules)}
      />
      {errors.kills && (
        <div className="text-red-500 text-sm">{errors.kills.message}</div>
      )}
    </div>
  )
}
