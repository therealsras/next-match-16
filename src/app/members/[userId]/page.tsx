import { getMemberByUserId } from "@/lib/actions/member-actions";
import { notFound } from "next/navigation";
import CardPageLayout from "./CardPageLayout";

export default async function MemberDetailedPage({ params }: { params: Promise<{ userId: string }> }) {
    const {userId} = await params;
    const member = await getMemberByUserId(userId);

    if (!member) return notFound()

    return (
        <CardPageLayout title="Profile">
            <div>{member.description}</div>
        </CardPageLayout>
    )
}