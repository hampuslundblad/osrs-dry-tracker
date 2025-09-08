import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ResultCardProps {
  probabilityOfDrop: number
  killsValue: string
}

export function ResultCard({ probabilityOfDrop, killsValue }: ResultCardProps) {
  const percentage = Number(probabilityOfDrop.toFixed(2)) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-bold text-center">Result</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <div>
          The probability of getting at least one drop in {killsValue} kills is{" "}
          <span className="font-bold">{percentage}%</span>
        </div>
      </CardContent>
    </Card>
  )
}
