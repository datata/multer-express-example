import "dotenv/config";
import express from "express";

const app = express();

// Serve static files
app.use(express.static('./src/public'))

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Healthy");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});