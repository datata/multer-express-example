import "dotenv/config";
import express from "express";
import cors from "cors";

import multerConfig from "./multer/multerConfig";
import errorHandler from "./errorHandler/errorHandler";

const app = express();

// cors
app.use(cors());

// Serve static files
app.use(express.static('./src/uploads'))

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Healthy");
});

app.post('/api/v1/upload', multerConfig.single('image'), function (req, res, next) {
  try {
    res.json(
      {
        message: "File uploaded successfully with name: " + req.file?.filename
      }
    );
  } catch (error: any) {
    res.json(
      {
        error: error.message
      }
    );
  }
})

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});