const fieldCheck = (values) => {
  const errors = {};
  switch (true) {
    case !values.name:
      errors.name = "Name is required";
      break;
    case values.name.length > 40:
      errors.name = "Enter a shorter name";
      break;
    case !values.email:
      errors.email = "Email is required";
      break;
    case !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email):
      errors.email = "Wrong Email";
      break;
    case !values.phone:
      errors.phone = "Phone is required";
      break;
    case !/^(380\d{9})?$/.test(values.phone):
      errors.phone = "Wrong phone number";
      break;

    default:
      break;
  }
  return errors;
};

export default fieldCheck;
