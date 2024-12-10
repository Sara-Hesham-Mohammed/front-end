import React from 'react';

const SignupForm = () => {
    return (
        <form
        className="flex flex-col p-10 gap-5 bg-gray-800 w-fit"
        onSubmit={handleSubmit(submitHandler)}
        >
            <TextInput
            label="Name"
            type="text"
            name="name"
            register={register}
            validation={{required: true}}
            />
            {formState.errors.name && (
                <FormInputError>Name must not be empty</FormInputError>
            )}

            <TextInput
            label="Username"
            type="text"
            name="username"
            register={register}
            validation={{required: true}}
            />
            {formState.errors.username && (
                <FormInputError>Name must not be empty</FormInputError>
            )}
            <TextInput
            label="Password"
            type="password"
            name="password"
            register={register}
            validation={{required: true}}
            />
            {formState.errors.password && (
                <FormInputError>Name must not be empty</FormInputError>
            )}

            <button 
            type="submit"
            className="bg-white rounded-xl my-4 py-2 px-8 self-center"
            >
                Signup
            </button>
            </form>

    );
}