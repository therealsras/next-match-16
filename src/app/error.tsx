'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Bug } from "lucide-react"

 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
 
  return (
    <div className="flex flex-col items-center justify-center gap-2 min-h-[calc(100vh-8rem)]">
      <Card className="w-2/5 mx-auto shadow-lg shadow-muted-foreground">
        <CardHeader className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-2 items-center text-primary">
                <div className="flex items-center gap-2">
                    <Bug size={30} />
                    <h1 className="text-3xl font-semibold">Error</h1>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <div className="flex justify-center text-destructive">
                {error.message}
            </div>
        </CardContent>
        <CardFooter className="flex justify-center">
            <Button onClick={() => reset()}>
                Try again
            </Button>
        </CardFooter>
      </Card>
    </div>
  )
}