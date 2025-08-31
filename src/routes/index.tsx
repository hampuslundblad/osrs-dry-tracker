import { createFileRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { RateInput } from "@/components/form/RateInput"
import { KillsInput } from "@/components/form/KillsInput"
import { ResultCard } from "@/components/ResultCard"
import { useDryCalculator } from "@/hooks/useDryCalculator"

export const Route = createFileRoute("/")({
  component: App,
})

function App() {
  const { form, probabilityOfDrop, killsValue, onSubmit } = useDryCalculator()

  return (
    <main className="p-2 bg-[#232323] min-h-screen flex items-center justify-center">
      <div className="w-1/3 flex flex-col gap-8">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <RateInput register={form.register} errors={form.formState.errors} />
          <KillsInput register={form.register} errors={form.formState.errors} />
          <Button type="submit" className="bg-orange-600 hover:cursor-pointer">
            Calculate
          </Button>
        </form>
        {probabilityOfDrop && (
          <ResultCard
            probabilityOfDrop={probabilityOfDrop}
            killsValue={killsValue}
          />
        )}
      </div>
    </main>
  )
}
