import React, { useState } from 'react'
import './pages-css/CustomRetest.css'

const CustomRetest = ({ options, value, onChange, placeholder }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectOption = (option) => {
        onChange(option);
        setIsOpen(false);
      };

    return (
        <div className='custom_retest'>
            <div className='retest_selected' onClick={handleToggle}>
                {value ? value : placeholder}
                {isOpen ? (
                    <span className="arrow-icon">&#x25B2;</span>
                ) : (
                    <span className="arrow-icon">&#x25BC;</span>
                )}
            </div>
            {isOpen && (
                <div className='select_options'>
                    {options.map((option) => (
                        <div key={option} onClick={() => handleSelectOption(option)}>
                        {option}
                      </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default CustomRetest
