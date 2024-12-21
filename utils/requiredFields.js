const validateRequiredFields = (data, requiredFileds = []) => {
  const error = [];

  const validationRules = {
    email: (value) => {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return "Invalid email format";
      }
    },

    age: (value) => {
      if (isNaN(value) || value < 18 || value > 100) {
        return "Age must be a number between 18 and 100";
      }
    },
    mobile: (value) => {
      if (!/^\d{10}$/.test(value)) {
        return "Mobile number must be 10 digits";
      }
    },
    salary: (value) => {
      if (isNaN(value) || value < 0) {
        return "Salary must be a positive number";
      }
    },
  };

  requiredFileds.forEach((field) => {
    // Check if field exists and is not empty
    if (!data[field] || data[field].toString().trim() === "") {
      error.push(`${field} is required`);
      return;
    }

    // Apply specific validation rules if they exist
    if (validationRules[field]) {
      const validationError = validationRules[field](data[field]);
      if (validationError) {
        error.push(validationError);
      }
    }
  });

  return {
    isValid: error.length === 0,
    error,
  };
};

module.exports = validateRequiredFields;
