import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export const MyInput = ({ className, type, placeholder, required }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={className} style={{display:"flex",justifyContent:"space-between",padding:"8px 7px 0px 7px"}}>
      <div>
      <input
        type={showPassword ? 'text' : type}
        placeholder={placeholder}
        required={required}
        className='input-pass'
      />
      </div>
      <div onClick={togglePasswordVisibility}>
        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
      </div>
    </div>
  );
};

export default MyInput;
