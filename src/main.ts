import dotenv from 'dotenv'

import app from './app'

dotenv.config()

const port = process.env.PORT || 3003

app.listen(port,
    () => console.log(`💊 Server up and runin\' on localhost:${port} 🩺`)
)
