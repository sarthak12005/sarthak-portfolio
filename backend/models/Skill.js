const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Skill name is required'],
    trim: true,
    maxlength: [50, 'Skill name cannot exceed 50 characters']
  },
  category: {
    type: String,
    required: [true, 'Skill category is required'],
    enum: ['frontend', 'backend', 'database', 'tools', 'languages', 'frameworks', 'other'],
    trim: true
  },
  proficiency: {
    type: Number,
    min: [1, 'Proficiency must be at least 1'],
    max: [10, 'Proficiency cannot exceed 10'],
    default: 5
  },
  yearsOfExperience: {
    type: Number,
    min: [0, 'Years of experience cannot be negative'],
    default: 0
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  iconUrl: {
    type: String,
    trim: true
  },
  color: {
    type: String,
    trim: true,
    match: [/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, 'Please enter a valid hex color']
  },
  order: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for efficient querying
skillSchema.index({ category: 1, order: 1 });
skillSchema.index({ isActive: 1 });
skillSchema.index({ proficiency: -1 });

module.exports = mongoose.model('Skill', skillSchema);
