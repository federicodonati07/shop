'use client'
import React from 'react';
import { Input, Button, Pagination, Select, SelectItem } from '@nextui-org/react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import CountrySelector from '@/components/access/selectNationsCities';

export default function SignUp() {
    const [value, setValue] = React.useState('');
    const [valuePsw, setValuePsw] = React.useState('');
    const [isVisible, setIsVisible] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [animating, setAnimating] = React.useState(false);
    const [animationClass, setAnimationClass] = React.useState('fade-enter');

    const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    const validatePsw = (valuePsw) => valuePsw.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/);

    const isInvalidEmail = React.useMemo(() => validateEmail(value) ? false : true, [value]);
    const isInvalidPsw = React.useMemo(() => validatePsw(valuePsw) ? false : true, [valuePsw]);

    const toggleVisibility = () => setIsVisible(!isVisible);

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
                <h2 className="text-2xl font-bold mb-4 text-center">Sign-Up</h2>
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
                            <CountrySelector></CountrySelector>
                        </div>
                    )}
                </div>
                <div className="flex flex-col md:flex-row justify-center mt-8 md:gap-8 md:items-center">
                    <Pagination
                        total={2}
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
                            onPress={() => handlePageChange(currentPage < 2 ? currentPage + 1 : 2)}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
