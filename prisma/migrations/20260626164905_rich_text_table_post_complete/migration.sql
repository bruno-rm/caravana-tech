/*
  Warnings:

  - Made the column `language` on table `RichTextPost` required. This step will fail if there are existing NULL values in that column.
  - Made the column `section` on table `RichTextPost` required. This step will fail if there are existing NULL values in that column.
  - Made the column `slug` on table `RichTextPost` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "RichTextPost" ALTER COLUMN "language" SET NOT NULL,
ALTER COLUMN "section" SET NOT NULL,
ALTER COLUMN "slug" SET NOT NULL;
