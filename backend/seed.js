import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main(){
  await prisma.student.createMany({
    data:[
      {name:"Sahil Shrestha",email:"sahiltuchhe123@gmail.com", department:'CS'},
      {name:"Jane Smith", email:"janesmith@example.com", department:'CS'}
    ],
    skipDuplicates: true
  })
}

await prisma.book.createMany({
  data:[
    {title:"The Great Gatsby", author:"F. Scott Fitzgerald", isbn:"9780743273565"},
    {title:"To Kill a Mockingbird", author:"Harper Lee", isbn:"9780061120084"}
  ],
  skipDuplicates: true
})



console.log('Seeding completed');
}

main()
.catch((e) => console.error(e))
.finally(async () => await prisma.$disconnect());