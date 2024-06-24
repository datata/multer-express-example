import "dotenv/config";
import express from "express";
import cors from "cors";

import multerConfig from "./multer/multerConfig";
import errorHandler from "./errorHandler/errorHandler";
const upload = multerConfig.single('image');

const app = express();

// cors
app.use(cors());

// Serve static files
app.use(express.static('./src/uploads'))

const PORT = process.env.PORT || 3000;

app.get("/", (__req, res) => {
  res.send("Healthy");
});

app.post('/api/v1/upload', (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      res.json(
        {
          message: err.message
        }
      );
      return;
    }

    res.json(
      {
        message: "File uploaded successfully with name: " + req.file?.filename
      }
    );
  })
})

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});