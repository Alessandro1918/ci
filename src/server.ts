import express from "express"

const PORT = process.env.PORT

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
  console.log(`Server running on http://localhost:${PORT}`)
})