import express from "express";
import expensesRoutes from './routes/index';
const PORT = process.env.PORT || 4000;

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api',expensesRoutes)


app.listen(PORT, () => { console.log(`Server started on port: ${PORT}`) })