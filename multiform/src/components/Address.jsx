import { useContext } from "react";
import { Formik } from "formik";
import { Button } from "antd";
import { Input } from "formik-antd";
import MultiStepFormContext from "./Context/MultiStepFormContext";

export const Address = () => {
  const { address, setAddress, next, prev } = useContext(MultiStepFormContext);
  return (
    <Formik
      initialValues={address}
      onSubmit={(values) => {
        setAddress(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.address1) errors.address1 = "State is required";
        if (!values.city) errors.city = "Pincode is required";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <div className={"details__wrapper"}>
            <div className={`form__item ${errors.address1 && "input__error"}`}>
              <label>State of residence *</label>
              <Input name={"address1"} />
              <p className={"error__feedback"}>{errors.address1}</p>
            </div>
            <div className={`form__item`}>
              <label>Address *</label>
              <Input name={"address2"} />
            </div>
            <div className={`form__item ${errors.city && "input__error"}`}>
              <label>Pincode *</label>
              <Input name={"city"} />
              <p className={"error__feedback"}>{errors.city}</p>
            </div>
            <div
              className={
                "form__item button__items d-flex justify-content-between"
              }
            >
              <Button type={"default"} onClick={prev}>
                Back
              </Button>
              <Button type={"primary"} onClick={handleSubmit}>
                Next
              </Button>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

