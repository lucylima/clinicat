/*
  Warnings:

  - You are about to drop the column `appointmentId` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `appointmentId` on the `User` table. All the data in the column will be lost.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_appointmentId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_appointmentId_fkey";

-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "petId" TEXT,
ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Pet" DROP COLUMN "appointmentId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "appointmentId",
ADD COLUMN     "name" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
