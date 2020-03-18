import { Spinner } from "../../@components/Spinner";
import React from "react";

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <WrappedComponent {...otherProps}></WrappedComponent>
  );
};

export { WithSpinner };
