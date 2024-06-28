import React from 'react';
import { Input } from "@nextui-org/react";
import { SiLetsencrypt } from "react-icons/si";

const Form = ({ 
  inputNameValue,
  handleInputNameChange,
  inputSurnameValue,
  handleInputSurnameChange,
  inputPrefixValue,
  handleInputPrefixChange,
  inputPhoneNumberValue,
  handleInputPhoneNumberChange
}) => {
  return (
    <>
      <div className='flex flex-row items-center justify-center'>
        <SiLetsencrypt className='text-small font-semibold mr-2'/>
        <span className='text-tiny font-semibold'>All your data are encrypted in the server</span>
      </div>
      <div className="items-center space-x-4 grid grid-cols-2 gap-2">
        <Input 
          label="Enter your Name" 
          variant="underlined"
          errorMessage="Please enter a valid name"
          isRequired
          value={inputNameValue}
          onChange={handleInputNameChange}
        />
        <Input 
          label="Enter your Surname" 
          variant="underlined"
          errorMessage="Please enter a valid surname"
          isRequired
          value={inputSurnameValue}
          onChange={handleInputSurnameChange}
        />
        <Input 
          label="Enter your Prefix" 
          variant="underlined"
          errorMessage="Please enter a valid prefix"
          isRequired
          startContent="+"
          value={inputPrefixValue}
          onChange={handleInputPrefixChange}
        />
        <Input 
          label="Enter your Phone Number" 
          variant="underlined"
          errorMessage="Please enter a valid phone number"
          isRequired
          value={inputPhoneNumberValue}
          onChange={handleInputPhoneNumberChange}
        />
      </div>
    </>
  );
};

export default Form;
