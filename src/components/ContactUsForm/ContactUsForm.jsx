import styles from "./contactUsForm.module.scss";
import { Field, Formik, Form } from "formik";

const ContactUsForm = () => {
  const fieldCheck = (values) => {
    const errors = {};
    switch (true) {
      case !values.email:
        errors.email = "This field is mandatory";
        break;
      case !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email):
        errors.email = "Invalid email address";
        break;
      case !values.password:
        errors.password = "This field is mandatory";
        break;

      default:
        break;
    }
    return errors;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const data = {
        email: values.email,
        password: values.password,
      };
      console.log("data", data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.contactUsFormWrap}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
        }}
        validate={fieldCheck}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          //   handleSubmit,
          //   isSubmitting,
        }) => (
          <Form>
            <label>* Full name:</label>
            <Field
              type="text"
              name="name"
              id="name"
              value={values.name}
              placeholder="John Rosie"
            />
            {errors.name && touched.name && (
              <div className={styles.error}>{errors.name}</div>
            )}
            <label>* E-mail:</label>
            <Field
              type="text"
              name="email"
              id="email"
              value={values.email}
              placeholder="johnrosie@gmail.com"
            />
            {errors.email && touched.email && (
              <div className={styles.error}>{errors.email}</div>
            )}
            <label>* Phone:</label>
            <Field
              type="phone"
              name="phone"
              id="phone"
              value={values.phone}
              placeholder="380961234567"
            />
            {errors.phone && touched.phone && (
              <div className={styles.error}>{errors.phone}</div>
            )}
            <label>Message:</label>
            <Field
              className={styles.contactUsForm_textarea}
              as="textarea"
              rows="3"
              name="text"
              id="text"
              value={values.text}
              placeholder="Your message"
            />
            {errors.text && touched.text && (
              <div className={styles.error}>{errors.text}</div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUsForm;
