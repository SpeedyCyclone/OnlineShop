const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const response = await fetch("https://fakestoreapi.com/products");
  const jsonData = await response.json();
  await prisma.product.createMany({
    data: jsonData,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
