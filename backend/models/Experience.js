const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Job title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  company: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true,
    maxlength: [100, 'Company name cannot exceed 100 characters']
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true,
    maxlength: [100, 'Location cannot exceed 100 characters']
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required']
  },
  endDate: {
    type: Date,
    default: null // null means current job
  },
  description: [{
    type: String,
    required: true,
    trim: true,
    maxlength: [500, 'Description item cannot exceed 500 characters']
  }],
  technologies: [{
    type: String,
    required: true,
    trim: true
  }],
  companyUrl: {
    type: String,
    trim: true,
    match: [/^https?:\/\/.+/, 'Please enter a valid URL']
  },
  companyLogo: {
    type: String,
    trim: true
  },
  employmentType: {
    type: String,
    enum: ['full-time', 'part-time', 'contract', 'internship', 'freelance'],
    default: 'full-time'
  },
  isCurrentJob: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Virtual for formatted period
experienceSchema.virtual('period').get(function() {
  const start = this.startDate.getFullYear();
  const end = this.endDate ? this.endDate.getFullYear() : 'Present';
  return `${start} - ${end}`;
});

// Index for efficient querying
experienceSchema.index({ startDate: -1 });
experienceSchema.index({ isCurrentJob: -1 });
experienceSchema.index({ order: 1 });

module.exports = mongoose.model('Experience', experienceSchema);
