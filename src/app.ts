import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'

import authRoutes from './routes/auth.routes'
import recordsRoutes from './routes/records.routes'
import profileRoutes from './routes/profile.routes'

const app = express()

app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(compression())
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/records', recordsRoutes)
app.use('/api/v1/profile', profileRoutes)

export default app
