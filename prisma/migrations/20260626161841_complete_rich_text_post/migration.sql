/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `RichTextPost` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "RichTextPost" ADD COLUMN     "author" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "language" TEXT,
ADD COLUMN     "mediaLink" TEXT,
ADD COLUMN     "section" TEXT,
ADD COLUMN     "slug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "RichTextPost_slug_key" ON "RichTextPost"("slug");
