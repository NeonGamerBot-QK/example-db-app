const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const load = async () => {
  try {
    await prisma.posts.deleteMany()
    console.log('Deleted records in posts table')

    // await prisma.product.deleteMany()
    // console.log('Deleted records in product table')

    await prisma.$queryRaw`ALTER TABLE posts AUTO_INCREMENT = 1`
    console.log('reset product auto increment to 1')

    // await prisma.$queryRaw`ALTER TABLE Category AUTO_INCREMENT = 1`
    // console.log('reset category auto increment to 1')

    // await prisma.category.createMany({
    //   data: categories,
    // })
    // console.log('Added category data')

    // await prisma.posts.createMany({
    //   data: products,
    // })
    // console.log('Added posts data')
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

load()
