const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/courseController');

router.get('/courses', ctrl.getCourses);
router.get('/courses/:id', ctrl.getCourseById);   // singular "Course"
router.post('/courses', ctrl.createCourse);      // singular "Course"
router.put('/courses/:id', ctrl.updateCourse);   // singular "Course"
router.delete('/courses/:id', ctrl.deleteCourse); // singular "Course"

module.exports = router;
