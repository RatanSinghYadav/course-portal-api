const Courses = require('../../models/coursesModel.js');
const mongoose = require('mongoose');
const User = require('../../models/user.js');

const getAllCourses = async (req, res) => {
    try {
        // const id = req.userId;

        const { page = 1, pageSize = 5, search } = req.query;

        let searchOptions = {};

        if (search) {
            searchOptions = {
                $or: [
                    { courseName: { $regex: search, $options: 'i' } },
                    { author: { $regex: search, $options: 'i' } }
                ]
            }
        }


        // function isValidObjectId(id) {
        //     return mongoose.Types.ObjectId.isValid(id);
        // }

        // if (!isValidObjectId(id)) {
        //     return res.status(400).json({ success: false, message: "Invalid user ID format." });
        // }

        const courses = await Courses.find(searchOptions).skip((page - 1) * pageSize).limit(parseInt(pageSize));

        // Check if any courses are found
        if (courses.length === 0) {
            return res.status(404).json({ success: false, message: "No courses found." });
        }

        const totalCourses = await Courses.countDocuments(searchOptions);
        const pageCount = await Math.ceil(totalCourses / pageSize);

        res.status(200).json({
            success: true, message: "Data found successfully", courses,
            pagination: {
                currentPage: parseInt(page),
                pageSize: parseInt(pageSize),
                totalCourses,
                pageCount,
            },
        });

    } catch (error) {
        console.error("Error while getting all courses:", error);
        res.status(500).json({ success: false, message: "Internal server error." });
    }
}


const getCourseDetails = async (req, res) => {
    try {
        const { id } = req.params;

        function isValidObjectId(id) {
            return mongoose.Types.ObjectId.isValid(id);
        }

        if (!isValidObjectId(id)) {
            return res.status(400).json({ success: false, message: "Invalid course ID format." });
        }

        const details = await Courses.findById(id);

        // Check if the course with the given ID exists
        if (!details) {
            return res.status(404).json({ success: false, message: "Course not found." });
        }

        // console.log(details);

        res.status(200).json({ success: true, message: "Data found successfully", details });
    } catch (error) {
        console.error("Error while getting course details:", error);
        res.status(500).json({ success: false, message: "Internal server error." });
    }
}

const enrollCourses = async (req, res) => {
    try {
        const userId = req.userId;
        const { id } = req.params;

        // console.log(userId);
        // console.log(id)


        const course = await Courses.findById({ _id: id });
        // console.log(course)


        const user = await User.findById(userId);


        if (user.courses.includes(course._id) || course.students.includes(userId)) {
            return res.status(400).json({ success: false, message: "User is already enrolled in the course." });
        }


        await user.courses.push(course._id);


        await course.students.push(userId);

        const savedUser = await user.save();
        const savedCourse = await course.save();

        res.status(200).json({ success: true, message: "Data saved successfully", savedUser, savedCourse });

    } catch (error) {
        console.error("Error while enrolling in the course:", error);
        res.status(500).json({ success: false, message: "Internal server error." });
    }
}


module.exports = { getAllCourses, getCourseDetails, enrollCourses };