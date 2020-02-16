import { SpinnerOverlay, SpinnerContainer } from "./styled.jsx";
import React from "react";

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer></SpinnerContainer>
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps}></WrappedComponent>
  );
};

export { WithSpinner };
