const express = require("express")

const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())

app.get("/", async (req, res) => {
  res
    .status(200)  //OK
    .send({
      "message": "Hello, Docker!"
    })
})

app.listen(PORT, () => {
  console.log(`JS server running on http://localhost:${PORT}`)
})