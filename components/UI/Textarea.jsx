import React from "react";

const Textarea = (props) => {
    const type = props.type
    const name = props.name;
    const changeHandler = props.onChange;
    const blurHandler = props.onBlur;
    const value = props.value
    const defaultValue = props.defaultValue
    const placeholder = props.placeholder
    const error = props.error
    const inputClasses = `${props.className} block rounded w-full outline-none border-[1px] border-gray-400 p-2 bg-transparent focus:border-[#fff] duration-300`
    return (
        <div className="mb-3 w-full">
            <textarea type={type} id={name} name={name}
                onChange={changeHandler} onBlur={blurHandler} value={value} defaultValue={defaultValue}
                className={inputClasses} placeholder={placeholder}
            ></textarea>
            {
                error && <p className="mt-1 text-red-400">Please enter a valid {name}.</p>
            }
        </div>
    );
};

export default Textarea;
