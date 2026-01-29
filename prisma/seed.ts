import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "../generated/prisma/client"
import { membersData } from "./membersData"
import { auth } from "@/lib/auth"

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

async function seedUsers() {
    for (const member of membersData) {
        const result = await auth.api.signUpEmail({
            body: {
                email: member.email,
                password: 'Pa$$w0rd',
                name: member.name,
                image: member.image
            }
        });

        const userId = result.user.id;

        await prisma.user.update({
            where: {id: userId},
            data: {
                emailVerified: true,
                member: {
                    create: {
                        dateOfBirth: new Date(member.dateOfBirth),
                        gender: member.gender,
                        name: member.name,
                        created: new Date(member.created),
                        updated: new Date(member.lastActive),
                        description: member.description,
                        city: member.city,
                        country: member.country,
                        imageUrl: member.image,
                        photos: {
                            create: [
                                {url: member.image}
                            ]
                        }
                    }
                }
            }
        })
    }
}

async function main() {
    await seedUsers();
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect();
    })