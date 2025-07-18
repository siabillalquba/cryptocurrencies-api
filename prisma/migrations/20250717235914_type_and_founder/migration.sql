/*
  Warnings:

  - You are about to drop the column `founder` on the `Cryptocurrency` table. All the data in the column will be lost.
  - Added the required column `founderId` to the `Cryptocurrency` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeId` to the `Cryptocurrency` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Cryptocurrency` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cryptocurrency" DROP COLUMN "founder",
ADD COLUMN     "founderId" INTEGER NOT NULL,
ADD COLUMN     "typeId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Founder" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Founder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cryptocurrency" ADD CONSTRAINT "Cryptocurrency_founderId_fkey" FOREIGN KEY ("founderId") REFERENCES "Founder"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cryptocurrency" ADD CONSTRAINT "Cryptocurrency_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
