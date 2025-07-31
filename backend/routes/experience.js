const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

// @route   GET /api/experience
// @desc    Get all experience entries
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { type, current } = req.query;
    
    // Build query
    let query = {};
    if (type) {
      query.employmentType = type;
    }
    if (current !== undefined) {
      query.isCurrentJob = current === 'true';
    }

    const experiences = await Experience.find(query)
      .sort({ isCurrentJob: -1, startDate: -1, order: 1 })
      .select('-__v');

    res.json({
      success: true,
      count: experiences.length,
      data: experiences
    });

  } catch (error) {
    console.error('Get experiences error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   GET /api/experience/:id
// @desc    Get single experience entry
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id).select('-__v');

    if (!experience) {
      return res.status(404).json({
        success: false,
        message: 'Experience not found'
      });
    }

    res.json({
      success: true,
      data: experience
    });

  } catch (error) {
    console.error('Get experience error:', error);
    
    if (error.name === 'CastError') {
      return res.status(404).json({
        success: false,
        message: 'Experience not found'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   POST /api/experience
// @desc    Create new experience entry
// @access  Private (admin only)
router.post('/', async (req, res) => {
  try {
    // If this is marked as current job, update all others to not be current
    if (req.body.isCurrentJob) {
      await Experience.updateMany({}, { isCurrentJob: false });
    }

    const experience = new Experience(req.body);
    await experience.save();

    res.status(201).json({
      success: true,
      message: 'Experience created successfully',
      data: experience
    });

  } catch (error) {
    console.error('Create experience error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   PUT /api/experience/:id
// @desc    Update experience entry
// @access  Private (admin only)
router.put('/:id', async (req, res) => {
  try {
    // If this is marked as current job, update all others to not be current
    if (req.body.isCurrentJob) {
      await Experience.updateMany(
        { _id: { $ne: req.params.id } }, 
        { isCurrentJob: false }
      );
    }

    const experience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!experience) {
      return res.status(404).json({
        success: false,
        message: 'Experience not found'
      });
    }

    res.json({
      success: true,
      message: 'Experience updated successfully',
      data: experience
    });

  } catch (error) {
    console.error('Update experience error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    if (error.name === 'CastError') {
      return res.status(404).json({
        success: false,
        message: 'Experience not found'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// @route   DELETE /api/experience/:id
// @desc    Delete experience entry
// @access  Private (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);

    if (!experience) {
      return res.status(404).json({
        success: false,
        message: 'Experience not found'
      });
    }

    res.json({
      success: true,
      message: 'Experience deleted successfully'
    });

  } catch (error) {
    console.error('Delete experience error:', error);
    
    if (error.name === 'CastError') {
      return res.status(404).json({
        success: false,
        message: 'Experience not found'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

module.exports = router;
