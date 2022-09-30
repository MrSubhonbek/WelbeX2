import {Router} from 'express'
import {createExpenses, deleteExpenses, getExpenses, getOneExpenses, updateExpenses} from '../controller/index.controller'
const router = Router()

router.post('/expenses', createExpenses)
router.get('/expenses', getExpenses)
router.get('/expenses/:id', getOneExpenses)
router.put('/expenses/:id', updateExpenses)
router.delete('/expenses/:id', deleteExpenses)

export default router