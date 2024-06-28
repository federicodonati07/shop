import React, { useState } from 'react';
import { cities } from '@/utils/lists/cities';
import { Select, SelectItem, Input } from "@nextui-org/react";

const CountrySelector = () => {
    const [selectValue, setSelectValue] = useState("")
    const [inputValue, setInputValue] = useState("")
    
    const handleSelectChange = (event)=>{
        setSelectValue(event.target.value)
    }
    const handleInputChange = (event)=>{
        setInputValue(event.target.value)
    }

    return (
        <div className="flex items-center space-x-4">
        <Select 
            label="Select a country" 
            className="max-w-xs"
            variant='underlined'
            isRequired
            value={selectValue}
            onSelectionChange={handleSelectChange}
        >
            {cities.map((city) => (
            <SelectItem key={city.code}>
                    {city.country}
            </SelectItem>
            ))}
        </Select>
        <Input 
                label="Enter your city" 
                variant="underlined"
                errorMessage="Please enter a valid email"
                isRequired
                value={inputValue}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default CountrySelector;