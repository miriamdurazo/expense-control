import React, { useState, useEffect } from "react"

export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof defaultValue === "function") {
            return defaultValue()
        } else {
            return defaultValue
        }
    })
    // To update the values in local storage
    useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    return [value, setValue]
}