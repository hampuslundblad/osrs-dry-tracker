import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

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
        <Progress
          value={percentage}
          className="w-full h-2 bg-gray-200 rounded-full"
        />
      </CardContent>
    </Card>
  )
}
