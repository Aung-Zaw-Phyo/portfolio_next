"use client";
import React, { useState } from "react";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";
import Swal from "sweetalert2";
import useInput from "@/hooks/use-input";
import { MdMarkEmailUnread } from "react-icons/md";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Send, Loader2 } from "lucide-react";

const Contact = () => {
    const [ref, isVisible] = useScrollAnimation();
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
        <section className="section pb-28" id="contact" ref={ref}>
            <div className={`max-w-2xl mx-auto transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0-init"}`}>
                <div className="text-center mb-10">
                    <h2 className="title mb-3">Get In Touch</h2>
                    <p className="text-muted-foreground">
                        If you have any project or need help, contact me
                    </p>
                </div>

                <div className="card">
                    {error && (
                        <div className="text-red-400 text-center p-3 bg-red-500/10 rounded-lg mb-6 border border-red-500/20">
                            {error}
                        </div>
                    )}
                    <form onSubmit={submitHandler}>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <Input
                                    type="text"
                                    id="name"
                                    placeholder="Your name"
                                    value={nameValue}
                                    error={nameHasError}
                                    name="name"
                                    onChange={nameChangeHandler}
                                    onBlur={nameBlurHandler}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <Input
                                    type="email"
                                    id="email"
                                    placeholder="your@email.com"
                                    value={emailValue}
                                    error={emailHasError}
                                    name="email"
                                    onChange={emailChangeHandler}
                                    onBlur={emailBlurHandler}
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Message
                            </label>
                            <Textarea
                                id="message"
                                placeholder="Your message..."
                                value={messageValue}
                                error={messageHasError}
                                name="message"
                                onChange={messageChangeHandler}
                                onBlur={messageBlurHandler}
                            />
                        </div>
                        <div className="flex justify-center">
                            {!isLoading ? (
                                <button type="submit" className="btn-primary w-full md:w-auto min-w-[200px]">
                                    <Send size={18} />
                                    Send Message
                                </button>
                            ) : (
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Loader2 className="animate-spin" size={20} />
                                    Sending...
                                </div>
                            )}
                        </div>
                    </form>
                </div>

                <div className="mt-8 text-center">
                    <a
                        href="mailto:aungzawphyo1102@gmail.com"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                        <MdMarkEmailUnread size={18} />
                        aungzawphyo1102@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
