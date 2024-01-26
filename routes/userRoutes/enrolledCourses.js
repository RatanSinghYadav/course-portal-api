const courses = require('../../models/coursesModel.js');
const User = require('../../models/user.js');

const getEnrolledCourses = async (req, res) => {
  try {
    const id = req.userId;
    const enrolledCourses = await User.findById(id).populate('courses',
      'courseName author enrollStatus duration schedule location'
    )

    res.status(201).json({ enrolledCourses, message: "enrolled courses found successfully", success: true });
  } catch (error) {
    console.error('Error while enrolling courses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deleteEnrolledCourse = async (req, res) => {
  try {
    const userId = req.userId;
    const { id } = req.params;
    // console.log(userId);
    // console.log(id);

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $pull: { courses: id } },
      { new: true }
    )

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    const updatedCourse = await courses.findByIdAndUpdate(
      { _id: id },
      { $pull: { students: userId } },
      { new: true }
    )

    if (!updatedCourse) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.status(201).json({ updatedUser, updatedCourse, message: "enrolled course delete successfully", success: true });

  } catch (error) {
    console.error('Error while delete courses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { getEnrolledCourses, deleteEnrolledCourse };
