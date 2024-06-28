import React from 'react';
import { cities } from '@/utils/lists/cities';
import { Select, SelectItem, Input } from "@nextui-org/react";
import { SiLetsencrypt } from "react-icons/si";

const CountrySelector = ({ 
  selectValue, 
  handleSelectChange, 
  inputValue, 
  handleInputChange, 
  inputAddressValue, 
  handleInputAddressChange, 
  inputCodeValue, 
  handleInputCodeChange, 
  inputCivicValue, 
  handleInputCivicChange 
}) => {
  return (
    <>
      <div className='flex flex-row items-center justify-center'>
        <SiLetsencrypt className='text-small font-semibold mr-2'/>
        <span className='text-tiny font-semibold'>All your data are encrypted in the server</span>
      </div>
      <div className="flex items-center space-x-4">
        <Select
          label="Select a country"
          className="max-w-xs"
          variant="underlined"
          isRequired
          value={selectValue}
          onChange={handleSelectChange}
        >
          {cities.map((city) => (
            <SelectItem key={city.code} value={city.country}>
              {city.country}
            </SelectItem>
          ))}
        </Select>
        <Input 
          label="Enter your city" 
          variant="underlined"
          errorMessage="Please enter a valid city"
          isRequired
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex items-center space-x-4">
        <Input 
          label="Enter your address" 
          variant="underlined"
          errorMessage="Please enter a valid address"
          isRequired
          value={inputAddressValue}
          onChange={handleInputAddressChange}
        />
        <Input
          type="number"
          label="Enter your civic number" 
          variant="underlined"
          errorMessage="Please enter a valid civic number"
          isRequired
          value={inputCivicValue}
          onChange={handleInputCivicChange}
        />
        <Input
          type="number"
          label="Enter your postal code" 
          variant="underlined"
          errorMessage="Please enter a valid postal code"
          isRequired
          value={inputCodeValue}
          onChange={handleInputCodeChange}
        />
      </div>
    </>
  );
};

export default CountrySelector;
