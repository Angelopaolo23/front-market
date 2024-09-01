const validationRules = {
  username: {
    required: "El nombre de usuario es requerido.",
    minLength: {
      value: 8,
      message: "El nombre de usuario debe tener al menos 8 caracteres.",
    },
  },
  email: {
    required: "El correo electrónico es requerido.",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: "Dirección de correo electrónico inválida.",
    },
  },
  password: {
    required: "La contraseña es requerida.",
    minLength: {
      value: 8,
      message: "La contraseña debe tener al menos 8 caracteres.",
    },
  },
  confirmPassword: {
    required: "Por favor, confirma tu contraseña.",
    match: { field: "password", message: "Las contraseñas no coinciden." },
  },
};

export const validateField = (fieldName, value, formData = {}) => {
  const rules = validationRules[fieldName];
  if (!rules) return "";

  if (rules.required && !value.trim()) {
    return rules.required;
  }

  if (rules.minLength && value.length < rules.minLength.value) {
    return rules.minLength.message;
  }

  if (rules.pattern && !rules.pattern.value.test(value)) {
    return rules.pattern.message;
  }

  if (rules.match && value !== formData[rules.match.field]) {
    return rules.match.message;
  }

  return "";
};

export const validateForm = (formData) => {
  const errors = {};
  Object.keys(formData).forEach((key) => {
    const error = validateField(key, formData[key], formData);
    if (error) errors[key] = error;
  });
  return errors;
};
