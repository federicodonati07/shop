'use client'
import React, { useState } from 'react';
import { Input, Button, Pagination } from '@nextui-org/react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import Form from './thirdPageSingup';
import CountrySelector from './secondPageSignup';

const SignUp = () => {
    const [value, setValue] = useState('');
    const [valuePsw, setValuePsw] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [animating, setAnimating] = useState(false);
    const [animationClass, setAnimationClass] = useState('fade-enter');

    const [selectValue, setSelectValue] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [inputAddressValue, setInputAddressValue] = useState("");
    const [inputCodeValue, setInputCodeValue] = useState("");
    const [inputCivicValue, setInputCivicValue] = useState("");

    const [inputNameValue, setInputNameValue] = useState("");
    const [inputSurnameValue, setInputSurnameValue] = useState("");
    const [inputPrefixValue, setInputPrefixValue] = useState("");
    const [inputPhoneNumberValue, setInputPhoneNumberValue] = useState("");

    const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    const validatePsw = (valuePsw) => valuePsw.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/);

    const isInvalidEmail = React.useMemo(() => validateEmail(value) ? false : true, [value]);
    const isInvalidPsw = React.useMemo(() => validatePsw(valuePsw) ? false : true, [valuePsw]);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSelectChange = (value) => {
        setSelectValue(value);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleInputAddressChange = (event) => {
        setInputAddressValue(event.target.value);
    };

    const handleInputCodeChange = (event) => {
        setInputCodeValue(event.target.value);
    };

    const handleInputCivicChange = (event) => {
        setInputCivicValue(event.target.value);
    };

    const handleInputNameChange = (event) => {
        setInputNameValue(event.target.value);
    };

    const handleInputSurnameChange = (event) => {
        setInputSurnameValue(event.target.value);
    };

    const handleInputPrefixChange = (event) => {
        setInputPrefixValue(event.target.value);
    };

    const handleInputPhoneNumberChange = (event) => {
        setInputPhoneNumberValue(event.target.value);
    };

    const handlePageChange = (page) => {
        setAnimating(true);
        setAnimationClass('fade-exit');
        setTimeout(() => {
            setCurrentPage(page);
            setAnimationClass('fade-enter');
            setAnimating(false);
        }, 500);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-center">Sign-Up {currentPage === 1 ? "Credential Info" : currentPage === 2 ? "Spediction Info" : "Other Info"}</h2>
                <div className={`mt-4 ${animating ? animationClass : ''}`}>
                    {currentPage === 1 && (
                        <>
                            <Input 
                                value={value}
                                type="email" 
                                label="Email" 
                                variant="underlined"
                                isInvalid={isInvalidEmail}
                                color={isInvalidEmail ? 'danger' : 'success'}
                                errorMessage="Please enter a valid email"
                                onValueChange={setValue}
                                isRequired
                                isClearable
                            />
                            <div className="mt-4">
                                <Input
                                    value={valuePsw}
                                    type={isVisible ? 'text' : 'password'}
                                    label="Password"
                                    variant="underlined"
                                    isInvalid={isInvalidPsw}
                                    color={isInvalidPsw ? 'danger' : 'success'}
                                    errorMessage="Password must be at least 8 characters long, include uppercase, lowercase, number, and special character"
                                    onValueChange={setValuePsw}
                                    isRequired
                                    endContent={
                                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                            {isVisible ? (
                                                <IoEyeOff className="text-2xl text-default-400 pointer-events-none" />
                                            ) : (
                                                <IoEye className="text-2xl text-default-400 pointer-events-none" />
                                            )}
                                        </button>
                                    }
                                />
                            </div>
                        </>
                    )}
                    {currentPage === 2 && (
                        <div className="mt-4 flex flex-col gap-4">
                            <CountrySelector
                                selectValue={selectValue}
                                handleSelectChange={handleSelectChange}
                                inputValue={inputValue}
                                handleInputChange={handleInputChange}
                                inputAddressValue={inputAddressValue}
                                handleInputAddressChange={handleInputAddressChange}
                                inputCodeValue={inputCodeValue}
                                handleInputCodeChange={handleInputCodeChange}
                                inputCivicValue={inputCivicValue}
                                handleInputCivicChange={handleInputCivicChange}
                            />
                        </div>
                    )}
                    {currentPage === 3 && (
                        <>
                            <div className="mt-4 flex flex-col gap-4">
                                <Form
                                    inputNameValue={inputNameValue}
                                    handleInputNameChange={handleInputNameChange}
                                    inputSurnameValue={inputSurnameValue}
                                    handleInputSurnameChange={handleInputSurnameChange}
                                    inputPrefixValue={inputPrefixValue}
                                    handleInputPrefixChange={handleInputPrefixChange}
                                    inputPhoneNumberValue={inputPhoneNumberValue}
                                    handleInputPhoneNumberChange={handleInputPhoneNumberChange}
                                />
                            </div>
                        </>
                    )}
                </div>
                <div className="flex flex-col md:flex-row justify-center mt-8 md:gap-8 md:items-center">
                    <Pagination
                        total={3}
                        color="primary"
                        page={currentPage}
                        onChange={handlePageChange}
                    />
                    <div className="flex gap-2 mt-4 md:mt-0">
                        <Button
                            size="sm"
                            variant="flat"
                            color="primary"
                            onPress={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
                        >
                            Previous
                        </Button>
                        <Button
                            size="sm"
                            variant="flat"
                            color="primary"
                            onPress={() => handlePageChange(currentPage < 3 ? currentPage + 1 : 2)}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
