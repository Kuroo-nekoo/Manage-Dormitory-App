import * as React from "react";
import { useFormContext, useFormState } from "react-hook-form";

const Input = ({ type, name, label, multiple, registerOptions, Icon }) => {
  const { register } = useFormContext();
  const { errors } = useFormState();

  return (
    <div className="mb-3">
      <label className="block text-md mb-1">{label}</label>
      <div className="flex items-center rounded-md border">
        {Icon && (
          <span className="w-4 h-4 m-4">
            <Icon></Icon>
          </span>
        )}
        {(multiple) ? <input
          className="w-full border-slate-600 focus:outline-none"
          type={type}
          multiple
          {...register(name, registerOptions)}
        ></input> : <input
          className="w-full border-slate-600 focus:outline-none"
          type={type}
          {...register(name, registerOptions)}
        ></input>}
        
      </div>
      {errors[name] && (
        <span className="text-red-500 h-4 text-sm">{errors[name].message}</span>
      )}
    </div>
  );
};

export default Input;
