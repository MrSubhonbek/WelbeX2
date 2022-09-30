"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExpenses = exports.updateExpenses = exports.createExpenses = exports.getOneExpenses = exports.getExpenses = void 0;
const database_1 = require("../database");
const getExpenses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM expenses');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.getExpenses = getExpenses;
const getOneExpenses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.pool.query('SELECT * FROM expenses WHERE id=$1', [id]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.getOneExpenses = getOneExpenses;
const createExpenses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date_col, name_col, count_col, distance } = req.body;
        yield database_1.pool.query('INSERT INTO expenses (date_col, name_col, count_col, distance) VALUES ($1, $2, $3, $4)', [date_col, name_col, count_col, distance]);
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
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.createExpenses = createExpenses;
const updateExpenses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { date_col, name_col, count_col, distance } = req.body;
        yield database_1.pool.query('UPDATE expenses SET date_col = $1, name_col = $2,  count_col = $3, distance = $4 WHERE id = $5', [date_col, name_col, count_col, distance, id]);
        return res.status(200).json('Update successfully');
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.updateExpenses = updateExpenses;
const deleteExpenses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        yield database_1.pool.query('DELETE FROM expenses WHERE id=$1', [id]);
        return res.status(200).json('Delete successfully');
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
});
exports.deleteExpenses = deleteExpenses;
