'use client';

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { SearchX } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center gap-2 min-h-[calc(100vh-8rem)]">
            <Card className="w-2/5 mx-auto shadow-lg shadow-muted-foreground">
                <CardHeader className="flex flex-col items-center justify-center">
                    <div className="flex flex-col gap-2 items-center text-primary">
                        <div className="flex items-center gap-2">
                            <SearchX size={30} />
                            <h1 className="text-3xl font-semibold">Not found</h1>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-center">
                        Sorry, could not find what you are looking for
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button onClick={() => router.back()}>
                        Go back
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}