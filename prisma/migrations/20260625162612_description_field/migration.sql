/*
  Warnings:

  - Made the column `description` on table `RichTextPost` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "RichTextPost" ALTER COLUMN "description" SET NOT NULL;
