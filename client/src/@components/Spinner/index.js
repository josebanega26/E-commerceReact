import React from 'react'
import { SpinnerOverlay, SpinnerContainer } from "./styled.jsx";

function Spinner() {
    return (
        <SpinnerOverlay>
            <SpinnerContainer></SpinnerContainer>
        </SpinnerOverlay>
    )
}

export { Spinner }
