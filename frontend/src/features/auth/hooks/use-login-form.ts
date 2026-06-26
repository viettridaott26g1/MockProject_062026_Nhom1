import { useState } from "react";
import type { ChangeEvent, SyntheticEvent } from "react";
import type { LoginFormData } from "../types";

export const useLoginForm = () => {
    const [formData, setFormData] = useState<LoginFormData>({
        email: "",
        password: "",
        rememberMe: false,
    });

    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();

        setIsLoading(true);
        setHasError(false);
        setErrorMessage("");

        try {
            console.log("Login with:", formData);
        } catch {
            setHasError(true);
            setErrorMessage("Email hoặc mật khẩu không đúng.");
        } finally {
            setIsLoading(false);
        }
    };

    return {
        formData,
        isLoading,
        hasError,
        errorMessage,
        handleInputChange,
        handleSubmit,
    };
};