import React from "react";

const Input = (props) => {
    const focus = props.focus;
    const type = props.type || "text";
    const name = props.name;
    const id = props.id || name;
    const changeHandler = props.onChange;
    const blurHandler = props.onBlur;
    const value = props.value;
    const defaultValue = props.defaultValue;
    const placeholder = props.placeholder;
    const error = props.error;
    const inputClasses = `${props.className || ""} block rounded-lg w-full outline-none border border-border bg-transparent px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary/25 transition-all duration-300 placeholder:text-muted-foreground/50`;
    return (
        <div className="w-full">
            <input
                type={type}
                id={id}
                name={name}
                autoFocus={focus}
                onChange={changeHandler}
                onBlur={blurHandler}
                value={value}
                defaultValue={defaultValue}
                className={inputClasses}
                placeholder={placeholder}
            />
            {error && <p className="mt-1.5 text-sm text-red-400">Please enter a valid {name}.</p>}
        </div>
    );
};

export default Input;
