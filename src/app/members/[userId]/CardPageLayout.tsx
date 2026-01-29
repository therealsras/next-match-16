import { CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";

type Props = {
    title: string;
    children: ReactNode
}

export default function CardPageLayout({title, children}: Props) {
  return (
    <>
        <CardHeader>
            <h2 className="text-2xl font-semibold capitalize text-primary">
                {title}
            </h2>
        </CardHeader>
        <Separator />
        <CardContent>
            {children}
        </CardContent>
    </>
  )
}