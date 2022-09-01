import "./form.styles.scss";

import { useState } from "react";
import SubHeading from "../subheading/subheading.component";
import CustomButton from "../custom-button/custom-button.component";
import CustomInput from "../custom-input/input.component";
import CustomTextarea from "../custom-textarea/textarea.component";
import { useForm } from "react-hook-form";
import { sendMessage } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (data) => {
    try {
      setIsLoading(true);
      const { name, contact, message } = data;
      sendMessage(name, contact, message);
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="contact-form">
      <form noValidate onSubmit={handleSubmit(submitForm)}>
        {/* <div className="subheading-container">
          <SubHeading highlight="#4C4EF999">Ask Queries Here</SubHeading>
        </div> */}
        <fieldset>
          <legend>
          Ask Queries Here
            {/* <SubHeading highlight="#4C4EF999">Ask Queries Here</SubHeading> */}
          </legend>
          <div className="inputs-container">
            <div className="name">
              <CustomInput
                label="your full name"
                register={{
                  ...register("name", { required: "provide your name" }),
                }}
                name="name"
                required
              />
              <p className="error">{errors?.name?.message}</p>
            </div>
            <div className="contact">
              <CustomInput
                label="your email/phone number"
                register={{
                  ...register("contact", {
                    required: "provide your email/phone number",
                  }),
                }}
                name="contact"
                required
              />
              <p className="error">{errors?.contact?.message}</p>
            </div>
            <div className="message">
              <CustomTextarea
                label="message/comment"
                register={{
                  ...register("message", {
                    required: "write your message here",
                  }),
                }}
                name="message"
              />
              <p className="error">{errors?.message?.message}</p>
            </div>
          </div>
          <div className="submit-btn-container">
            <div className="submit-btn">
              <CustomButton backgroundColor="#4C4EF9" isLoading={isLoading}>
                Submit
              </CustomButton>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
