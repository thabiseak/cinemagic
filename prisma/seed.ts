import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD must be set to seed an admin user.');
  }

  const passwordHash = await hash(password, 12);

  await prisma.user.upsert({
    where: { email },
    update: {
      passwordHash,
      role: 'ADMIN',
    },
    create: {
      email,
      passwordHash,
      role: 'ADMIN',
      name: 'Cine Magic Admin',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error('Seeding failed', error);
    await prisma.$disconnect();
    process.exit(1);
  });
