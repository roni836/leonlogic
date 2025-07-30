import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

declare global {
  // Allows TypeScript to understand the custom global property 'cachedPrisma'
  var cachedPrisma: PrismaClient | undefined;
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export default prisma;
