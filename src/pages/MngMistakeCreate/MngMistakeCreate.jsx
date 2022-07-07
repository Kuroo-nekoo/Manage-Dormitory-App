import * as React from "react";
import { useForm, FormProvider } from "react-hook-form";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";

import { useMistakeCreate } from "./hooks";

const StdRoomRegistered = () => {
  const mistakeCreate = useMistakeCreate();

  const mistakeForm = useForm({
    'defaultValues': { 
      'student_card_id': "", 
      'content': "" , 
      'images[]': []
    },
  });

  const mistakeSubmit = mistakeForm.handleSubmit((e, input) => {
    console.log(new FormData(mistakeForm.getValues()));

    mistakeCreate.mutate(new FormData(mistakeForm.getValues()), {
      onSuccess(data) {
        console.log(data);
      },
    });
  });

  return (
    <FormProvider {...mistakeForm}>
      <Form onSubmit={mistakeSubmit} enctype="multipart/form-data" title="Create mistake">
        <Input 
          type="text"  
          name="student_card_id"
          label="Student Card ID"
          registerOptions={{
            required: { value: true, message: "Please enter email Student Card ID" },
          }} />
        <Input 
          type="text"  
          name="content"
          label="Content"
          registerOptions={{
            required: { value: true, message: "Please enter Content" },
          }} />
          <Input 
            type="file"  
            name="images[]"
            label="Image"
            multiple="true"
            registerOptions={{
              required: { value: true, message: "Please enter Image" },
            }} />
        <Button type="submit">Create</Button>
      </Form>
    </FormProvider>
  );
};

export default StdRoomRegistered;