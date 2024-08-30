import "dotenv/config"  //without dotenv package, package.json script has to be: "dev": "tsx watch --env-file .env src/server.ts"
import express from "express"

const PORT = parseInt(process.env.PORT!) || 3000

const app = express()

app.use(express.json())

app.get("/", async (req, res) => {
  res
    .status(200)  //OK
    .send({
      "message": "Hello, Docker!!",
      "language": "TS"
    })
})

app.listen(PORT, () => {
  console.log(`Typescrypt server running on http://localhost:${PORT}`)
})

//Export this here, to import inside ”/api”:
export default app