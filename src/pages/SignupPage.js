import React from "react";
import SignupForm from 'SignupForm.jsx';
import { useForm } from 'react-hook-form';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <form
      className="flex flex-col p-10 gap-5 bg-gray-800 w-fit"
      onSubmit={handleSubmit(submitHandler)}
    >
      {Name}
      <TextInput
        label="Name"
        type="text"
        name="name"
        register={register}
        validation={{ required: 'Name must not be empty' }}
      />
      {errors.name && (
        <FormInputError>{errors.name.message}</FormInputError>
      )}

      {username}
      <TextInput
        label="Username"
        type="text"
        name="username"
        register={register}
        validation={{ required: 'Username must not be empty' }}
      />
      {errors.username && (
        <FormInputError>{errors.username.message}</FormInputError>
      )}

      {password}
      <TextInput
        label="Password"
        type="password"
        name="password"
        register={register}
        validation={{ required: 'Password must not be empty' }}
      />
      {errors.password && (
        <FormInputError>{errors.password.message}</FormInputError>
      )}

      {~handleSubmit}
      <button
        type="submit"
        className="bg-white rounded-xl my-4 py-2 px-8 self-center"
      >
        Signup
      </button>
    </form>
  );
};

export default SignupForm;