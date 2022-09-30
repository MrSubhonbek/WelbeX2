import { Request, Response } from 'express'
import { QueryResult } from 'pg'
import { pool } from '../database'

export const getExpenses = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM expenses')
        return res.status(200).json(response.rows)
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error')
    }
}

export const getOneExpenses = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id)
        const response: QueryResult = await pool.query('SELECT * FROM expenses WHERE id=$1', [id])
        return res.status(200).json(response.rows)
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error')
    }
}

export const createExpenses = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { date_col, name_col, count_col, distance } = req.body
        await pool.query('INSERT INTO expenses (date_col, name_col, count_col, distance) VALUES ($1, $2, $3, $4)', [date_col, name_col, count_col, distance])
        return res.status(200).json({
            message: "Expenses created successfully",
            body: {
                expenses: {
                    date_col,
                    name_col,
                    count_col,
                    distance
                }
            }
        })
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error')
    }
}

export const updateExpenses = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id)
        const { date_col, name_col, count_col, distance } = req.body
        await pool.query('UPDATE expenses SET date_col = $1, name_col = $2,  count_col = $3, distance = $4 WHERE id = $5', [date_col, name_col, count_col, distance, id])

        return res.status(200).json('Update successfully')
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error')
    }
}

export const deleteExpenses = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id)
        await pool.query('DELETE FROM expenses WHERE id=$1', [id])
        return res.status(200).json('Delete successfully')
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error')
    }
}