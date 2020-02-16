import { useState } from 'react'

export const useInputChange = () => {
    const [input, setInput] = useState({})

    const handleInputChange = (e) => setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value
    })
    const clearInput = (e) => {
        setInput(e)
    }

    return [input, handleInputChange, clearInput]
}