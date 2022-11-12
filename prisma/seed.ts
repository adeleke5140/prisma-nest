import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.author.create({
    data: {
      name: 'Kehinde',
      email: 'kehinde@ken.com',
      articles: {
        create: {
          title: 'Mongodb and Prisma launch',
          body: 'support for mongodb has been one of the most requested features since the...',
          description: 'we are excited to blah blah blah...',
          published: false,
        },
      },
    },
  });
  const user2 = await prisma.author.create({
    data: {
      name: 'phil',
      email: 'phil@phil.com',
      articles: {
        create: {
          title: 'Phil tries Prisma for the first time',
          body: 'support for mongodb has been one of the most requested features since the...',
          description: 'we are excited to blah blah blah...',
          published: false,
        },
      },
    },
  });

  console.log(user1, user2);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
