import React, { useState, useContext } from "react";

import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useForm } from "../../shared/hooks/form-hook";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import ImageUpload from "../../shared/components/FormElements/ImageUpload";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import "./Auth.css";

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const authSubmitHandler = async (event) => {
    event.preventDefault();
    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users/login`,
          "POST",
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        auth.login(responseData.userId, responseData.token);
      } catch (err) {}
    } else {
      try {
        const formData = new FormData();
        formData.append("email", formState.inputs.email.value);
        formData.append("name", formState.inputs.name.value);
        formData.append("password", formState.inputs.password.value);
        formData.append("image", formState.inputs.image.value);

        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/users/signup`,
          "POST",
          formData
        );
        auth.login(responseData.userId, responseData.token);
      } catch (err) {}
    }
  };

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          image: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
          image: {
            value: null,
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Card className="authentication">
        {isLoading && <LoadingSpinner asOverlay />}
        <hr />
        {isLoginMode ? <h2>Login</h2> : <h2>Sign Up</h2>}
        <hr />
        <form onSubmit={authSubmitHandler}>
          {!isLoginMode && (
            <Input
              element="input"
              id="name"
              type="text"
              label="Your Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name"
              onInput={inputHandler}
            />
          )}
          {!isLoginMode && (
            <ImageUpload
              id="image"
              center="center"
              onInput={inputHandler}
              label="User Photo"
              errorText="Please provide an image"
            />
          )}
          <Input
            id="email"
            element="input"
            type="email"
            label="Email address"
            placeholder="example@example.com"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
            errorText="Email address provided is not valid!"
            onInput={inputHandler}
          />
          <Input
            id="password"
            element="input"
            type="password"
            label="Password"
            placeholder="******"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
            errorText="Password provided is not long enough! (at least 5 characters)"
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            {isLoginMode ? "LOGIN" : "SIGN UP"}
          </Button>
        </form>
        <Button inverse onClick={switchModeHandler}>
          SWITCH TO {isLoginMode ? "SIGN UP" : "LOGIN"}
        </Button>
      </Card>
    </React.Fragment>
  );
};

export default Auth;
