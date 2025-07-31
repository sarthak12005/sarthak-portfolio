const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Generic API call function
const apiCall = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Contact API
export const contactAPI = {
  // Submit contact form
  submit: (formData) => 
    apiCall('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    }),
};

// Projects API
export const projectsAPI = {
  // Get all projects
  getAll: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiCall(`/projects${queryString ? `?${queryString}` : ''}`);
  },

  // Get single project
  getById: (id) => apiCall(`/projects/${id}`),

  // Get featured projects
  getFeatured: () => apiCall('/projects?featured=true'),
};

// Skills API
export const skillsAPI = {
  // Get all skills
  getAll: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiCall(`/skills${queryString ? `?${queryString}` : ''}`);
  },

  // Get skills by category
  getByCategory: (category) => apiCall(`/skills?category=${category}`),

  // Get skill categories
  getCategories: () => apiCall('/skills/categories'),
};

// Experience API
export const experienceAPI = {
  // Get all experience
  getAll: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiCall(`/experience${queryString ? `?${queryString}` : ''}`);
  },

  // Get single experience
  getById: (id) => apiCall(`/experience/${id}`),

  // Get current job
  getCurrent: () => apiCall('/experience?current=true'),
};

// Health check
export const healthCheck = () => apiCall('/health');

export default {
  contactAPI,
  projectsAPI,
  skillsAPI,
  experienceAPI,
  healthCheck,
};
