import styles from "./contactUsForm.module.scss";
import { nanoid } from "nanoid";
import { Field, Formik, Form } from "formik";

import fieldCheck from "../../utils/formikFieldCheck";
import ButtomSubmit from "../Buttons/ButtomSubmit/ButtomSubmit";

const ContactUsForm = () => {
  const handlePhoneChange = (e, setFieldValue) => {
    const value = e.target.value;
    const onlyPhone = /^\d*$/;
    if (onlyPhone.test(value)) {
      setFieldValue("phone", value);
    }
  };
  const handleSubmit = (values, { resetForm }) => {
    try {
      const data = {
        id: nanoid(),
        name: values.name,
        email: values.email,
        phone: values.phone,
        text: values.text,
      };
      console.log("data", data);
      resetForm();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.contactUsContainer}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          text: "",
        }}
        validate={fieldCheck}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,

          setFieldValue,
        }) => (
          <Form className={styles.fieldForm}>
            <div
              // style={{
              //   borderColor: errors.name && touched.name ? "#D28B8B" : "",
              // }}
              className={
                errors.name && touched.name
                  ? `${styles.fieldForm_fieldBlock} ${styles.anim}`
                  : `${styles.fieldForm_fieldBlock} `
              }
            >
              <label htmlFor="name">* Full name:</label>
              <Field
                type="text"
                name="name"
                id="name"
                value={values.name}
                placeholder="John Rosie"
                maxLength={50}
              />
              {errors.name && touched.name && (
                <div className={styles.fieldForm_fieldBlock_error}>
                  {errors.name}
                </div>
              )}
            </div>
            <div
              // style={{
              //   borderColor: errors.email && touched.email ? "#D28B8B" : "",
              // }}
              className={
                errors.email && touched.email
                  ? `${styles.fieldForm_fieldBlock} ${styles.anim}`
                  : `${styles.fieldForm_fieldBlock} `
              }
            >
              <label htmlFor="email">* E-mail:</label>
              <Field
                type="text"
                name="email"
                id="email"
                value={values.email}
                placeholder="johnrosie@gmail.com"
              />
              {errors.email && touched.email && (
                <div className={styles.fieldForm_fieldBlock_error}>
                  {errors.email}
                </div>
              )}
            </div>
            <div
              // style={{
              //   borderColor: errors.phone && touched.phone ? "#D28B8B" : "",
              // }}
              className={
                errors.phone && touched.phone
                  ? `${styles.fieldForm_fieldBlock} ${styles.anim}`
                  : `${styles.fieldForm_fieldBlock} `
              }
            >
              <label htmlFor="phone">* Phone:</label>
              <Field
                type="phone"
                name="phone"
                id="phone"
                value={values.phone}
                onChange={(e) => handlePhoneChange(e, setFieldValue)}
                placeholder="380961234567"
                maxLength={12}
              />
              {errors.phone && touched.phone && (
                <div className={styles.fieldForm_fieldBlock_error}>
                  {errors.phone}
                </div>
              )}
            </div>
            <div
              className={`${styles.fieldForm_fieldBlock} ${styles.textArea}`}
            >
              <label htmlFor="text">Message:</label>
              <Field
                className={styles.fieldForm_fieldBlock_textarea}
                as="textarea"
                rows="3"
                name="text"
                id="text"
                onChange={handleChange}
                value={values.text}
                placeholder="Your message"
                maxLength={200}
              />
              <span
                style={{
                  color: values.text.length === 200 ? "#D28B8B" : "",
                }}
                className={styles.fieldForm_fieldBlock_textareaCounter}
              >
                {values.text.length}/200
              </span>
            </div>
            <div className={styles.fieldForm_buttonWrap}>
              <ButtomSubmit type="submit">Send</ButtomSubmit>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUsForm;
