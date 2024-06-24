//multer
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg");
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Only .jpg and .png format allowed!"), false);
  }
};

const limits = {
  fileSize: 2 * 1024 * 1024, // 2 MB
};


const upload = multer(
  {
    storage,
    fileFilter,
    limits
  }
)

export default upload;