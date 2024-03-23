import React from "react";

const Input = (props) => {
    const focus = props.focus
    const type = props.type
    const name = props.name;
    const changeHandler = props.onChange;
    const blurHandler = props.onBlur;
    const value = props.value
    const defaultValue = props.defaultValue
    const placeholder = props.placeholder
    const error = props.error
    const inputClasses = `${props.className} block rounded w-full outline-none border-[1px] border-gray-400 h-[40px] p-2 bg-transparent focus:border-[#fff] duration-300`
    return (
        <div className="mb-3 w-full">
            <input type={type} id={name} name={name} autoFocus={focus}
                onChange={changeHandler} onBlur={blurHandler} 
                value={value} defaultValue={defaultValue}
                className={inputClasses} placeholder={placeholder}
            />
            {
                error && <p className="mt-1 text-red-400">Please enter a valid {name}.</p>
            }
        </div>
    );
};

export default Input;
