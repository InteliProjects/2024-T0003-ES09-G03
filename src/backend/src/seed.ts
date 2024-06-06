import { prismaService } from './prisma/prisma'

async function seed() {
  const companie = await prismaService.company.create({
    data: {
      id: 'f28da7ef-8941-4a2a-b2e5-cd501a4cd16d',
      name: 'Wonder Technologies',
    },
  })

  const userA = await prismaService.customer.create({
    data: {
      id: 'd21089d4-cdfa-4344-ad9d-0fabbbcce410',
      name: 'John Doe',
      phoneNumber: '123-456-7890',
      email: 'john.doe@example.com',
      age: '30',
    },
  })

  const userB = await prismaService.customer.create({
    data: {
      id: 'fd1a0487-2558-4a7b-b8d3-07a4aaa02c2a',
      name: 'Jane Smith',
      phoneNumber: '987-654-3210',
      email: 'jane.smith@example.com',
      age: '25',
    },
  })

  const userC = await prismaService.customer.create({
    data: {
      id: '8cc4e338-f4a0-4d17-ac70-239f5397a7a6',
      name: 'Michael Johnson',
      phoneNumber: '555-123-4567',
      email: 'michael.johnson@example.com',
      age: '40',
    },
  })

  await prismaService.customersOnCompany.createMany({
    data: [
      {
        companyId: companie.id,
        customerId: userA.id,
      },
      {
        companyId: companie.id,
        customerId: userB.id,
      },
      {
        companyId: companie.id,
        customerId: userC.id,
      },
    ],
  })

  await prismaService.report.createMany({
    data: [
      {
        customerId: 'd21089d4-cdfa-4344-ad9d-0fabbbcce410',
        companyId: 'f28da7ef-8941-4a2a-b2e5-cd501a4cd16d',
        id: '2cb073b7-9638-4c44-b423-7ba57eb4882c',
      },
    ],
  })
}

// npx prisma db seed

seed()
  .catch((e) => {
    console.error('Seeding failed!', e)
    process.exit(1)
  })
  .finally(async () => {
    await prismaService.$disconnect()
  })
