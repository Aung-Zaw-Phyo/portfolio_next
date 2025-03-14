"use client";
import React, { useState } from "react";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";
import Swal from "sweetalert2";
import useInput from "@/hooks/use-input";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoMdMailUnread } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa";

const Contact = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    value: nameValue,
    hasError: nameHasError,
    isValid: nameIsValid,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    resetHandler: nameResethHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    hasError: emailHasError,
    isValid: emailIsValid,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    resetHandler: emailResethHandler,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  // const {
  //     value: subjectValue,
  //     hasError: subjectHasError,
  //     isValid: subjectIsValid,
  //     changeHandler: subjectChangeHandler,
  //     blurHandler: subjectBlurHandler,
  //     resetHandler: subjectResethHandler
  // } = useInput(value => value.trim() !== '')

  const {
    value: messageValue,
    hasError: messageHasError,
    isValid: messageIsValid,
    changeHandler: messageChangeHandler,
    blurHandler: messageBlurHandler,
    resetHandler: messageResethHandler,
  } = useInput((value) => value.trim() !== "");

  const clearForm = () => {
    nameResethHandler();
    emailResethHandler();
    messageResethHandler();
  };

  const successAlert = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: "success",
      title: "Successfully Sent.",
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const isValid = nameIsValid && emailIsValid && messageIsValid;
    if (!isValid) {
      setError("All fields are required!");
      return;
    }
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://portfolio-mail-664b.onrender.com/api/portfolio/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: nameValue,
            email: emailValue,
            message: messageValue,
          }),
        }
      );

      if (response.status === 422) {
        throw await response.json();
      }
      if (!response.ok) {
        throw new Error("Sending Message failed!");
      }
      successAlert();
      clearForm();
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return (
    <div className="container py-12 pb-28" id="contact">
      <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[60%] mx-auto">
        <h1 className="mb-3">Get In Touch</h1>
        <h1 className="title mb-8">
          If you have any porject or need help. Contact me
        </h1>
        <div className="">
          {error && (
            <div className="text-red-400 text-center p-3 bg-[#ffffff0c] rounded-lg mb-3">
              {error}
            </div>
          )}
          <form onSubmit={submitHandler}>
            <div className="grid md:grid-cols-2 gap-3">
              <Input
                type="text"
                placeholder="Name"
                value={nameValue}
                error={nameHasError}
                name="name"
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
              />
              <Input
                type="email"
                placeholder="Email"
                value={emailValue}
                error={emailHasError}
                name="email"
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
              />
            </div>
            {/* <Input type='text' placeholder='Subject' 
                            value={subjectValue} error={subjectHasError} name='subject'
                            onChange={subjectChangeHandler} onBlur={subjectBlurHandler}
                        /> */}
            <Textarea
              placeholder="Message"
              value={messageValue}
              error={messageHasError}
              name="message"
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
            />
            <div className="flex justify-center ">
              {!isLoading && (
                <button className="w-full md:w-[50%]">CONFIRM</button>
              )}
              {isLoading && (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
