'use server';

import { prisma } from "../prisma";
import { getCurrentUser } from "./auth-actions";

export async function getMembers() {
    const user = await getCurrentUser();
    if (!user) return null;

    try {
        return prisma.member.findMany({
            where: {NOT: {userId: user.id}}
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getMemberByUserId(userId: string) {
    try {
        return prisma.member.findUnique({where: {userId}})
    } catch (error) {
        console.log(error);
        throw error;
    }
}