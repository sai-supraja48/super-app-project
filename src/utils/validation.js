export const validateForm = (formData) => {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "Name is required";
  }

  if (!formData.username.trim()) {
    errors.username = "Username is required";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Enter a valid email";
  }

  if (!/^\d{10}$/.test(formData.mobile)) {
    errors.mobile = "Enter a valid 10-digit mobile number";
  }

  return errors;
};