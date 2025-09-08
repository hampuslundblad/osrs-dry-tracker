import { createFileRoute, useNavigate, useSearch } from "@tanstack/react-router"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RateInput } from "@/components/form/RateInput"
import { KillsInput } from "@/components/form/KillsInput"
import { ResultCard } from "@/components/ResultCard"
import { useDrynessForm } from "@/hooks/useDrynessForm"
import { Layout } from "@/components/Layout"

export const Route = createFileRoute("/")({
  component: App,
  validateSearch: (search) => {
    return {
      kills: search.kills ? String(search.kills) : "",
      rate: search.rate ? String(search.rate) : "",
    }
  },
})

function App() {
  const { kills, rate } = useSearch({ from: "/" })

  const navigate = useNavigate({ from: "/" })

  const { form, probabilityOfDrop, submit } = useDrynessForm({
    rate: rate,
    kills: kills,
  })

  useEffect(() => {
    if (rate && kills) {
      submit({ rate, kills })
    }
  }, [])

  const onSubmit = (data: { rate: string; kills: string }) => {
    navigate({ to: "/", search: { rate: data.rate, kills: data.kills } })
    submit(data)
  }

  return (
    <Layout>
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
            killsValue={form.getValues("kills")}
          />
        )}
      </div>
    </Layout>
  )
}
