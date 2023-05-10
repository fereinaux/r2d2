-- Delete
DELETE FROM "MOVIE"
ALTER TABLE "Movie" DROP COLUMN "sequential";
-- AlterTable
ALTER TABLE "Movie"
ADD COLUMN "img" TEXT;
ALTER TABLE "Movie"
ADD "sequential" INTEGER NOT NULL,