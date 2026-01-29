import { Spinner } from "@/components/ui/spinner";

export default function loading() {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-2">
        <Spinner className="size-10 text-primary" />
        <span className="text-muted-foreground">Loading...</span>
    </div>
  )
}