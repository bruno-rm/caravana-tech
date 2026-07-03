/*
  Warnings:

  - You are about to drop the column `description` on the `RichTextPost` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `RichTextPost` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RichTextPost" DROP COLUMN "description",
DROP COLUMN "image";
