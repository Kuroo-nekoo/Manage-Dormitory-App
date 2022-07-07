import * as React from "react";

const Form = ({ onSubmit, children, title, enctype }) => {
  return (
    <form onSubmit={onSubmit} encType={enctype} className="flex flex-col w-96 mx-auto p-4">
      <h1 className="text-3xl font-semibold">{title}</h1>
      {children}
    </form>
  );
};

export default Form;
