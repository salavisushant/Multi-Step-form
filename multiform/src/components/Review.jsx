import { Button, Col, Row } from "antd";
import{ useContext } from "react";
import MultiStepFormContext from "./Context/MultiStepFormContext";

export const Review = () => {
    const { details, address, next, prev } = useContext(MultiStepFormContext);
    

  return (
    <div className={"details__wrapper"}>
      <Row>
        <Col span={24}>
          <h1>Details</h1>
          <p>Name: {details.name}</p>
          <p>Age: {details.age}</p>
          <p>Date of Birth: {details.profession}</p>
        </Col>
        <Col span={24}>
          <h1>Address</h1>
          <p>State : {address.address1}</p>
          {address.address2 && <p>Address: {address.address2}</p>}
          <p>Pincode: {address.city}</p>
          <div
            className={
              "form__item button__items d-flex justify-content-between"
            }
          >
            <Button type={"default"} onClick={prev}>
              Back
            </Button>
            <Button type={"primary"} onClick={next}>
              Confirm
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

