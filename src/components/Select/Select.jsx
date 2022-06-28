import * as React from "react";

const Select = ({ name, label, options }) => {
  return (
    <div className="mb-3">
      <label className="block text-md mb-1">{label}</label>
      <select name={name} className="p-1 w-full h-10 border-slate-600 focus:outline-none rounded-md border">
          {options.map((option, i) => {
            return <option value={option.value} key={i}>{option.content}</option>
          })}
        </select>
    </div>
  );
};

export default Select;
