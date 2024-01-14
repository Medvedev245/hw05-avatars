//мидлвара для загрузки файлов
import multer from "multer";
import path from "path";

const destination = path.resolve("public", "avatars");

const storage = multer.diskStorage({
  destination,
});
