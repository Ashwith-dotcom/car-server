const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createCar, getCars, getCar, updateCar, deleteCar } = require('../controllers/cars');

router.post('/', auth, createCar);
router.get('/', auth, getCars);
router.get('/:id', auth, getCar);
router.put('/:id', auth, updateCar);
router.delete('/:id', auth, deleteCar);
/**
 * @swagger
 * /api/cars:
 *   post:
 *     summary: Create a new car
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Car created successfully
 *   get:
 *     summary: Get all cars for the authenticated user
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of cars
 */

/**
 * @swagger
 * /api/cars/{id}:
 *   get:
 *     summary: Get a specific car
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Car details
 *   put:
 *     summary: Update a car
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Car updated successfully
 *   delete:
 *     summary: Delete a car
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Car deleted successfully
 */
module.exports = router;