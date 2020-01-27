import { useState } from 'react'

export const useInputChange = () => {
    const [input, setInput] = useState({})

    const handleInputChange = (e) => setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.value
    })
    const clearInput = () => {
        setInput({})
    }

    return [input, handleInputChange, clearInput]
}