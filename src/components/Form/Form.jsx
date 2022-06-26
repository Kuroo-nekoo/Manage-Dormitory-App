import * as React from "react";

const Form = ({ onSubmit, children, title }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col w-96 mx-auto  p-4">
      <h1 className="text-3xl font-semibold">{title}</h1>
      {children}
    </form>
  );
};

export default Form;
