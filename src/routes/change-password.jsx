import { Link, useNavigate } from 'react-router-dom';
import CONSTANTS from '../constants/constant';
import BaseInput from '../components/common/BaseInput';
import AuthFormLayout from '../components/layouts/AuthFormLayout';
import { useState } from 'react';
import { isMailValid } from '../utils/checker';
import BaseButton from '../components/common/BaseButton';

const ChangePasswordPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!isMailValid(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    navigate(CONSTANTS.ROUTES.JOB_LIST);
  };

  // console.log('Form data: ', formData);
  console.log('Error: ', error);

  return (
    <div className="items-center justify-center bg-gray-100 container-page">
      <AuthFormLayout
        title="Change Password"
        formDetails={
          <>
            <BaseInput
              label="Current password"
              type="password"
              name="currentPassword"
              placeholder="Currnent Password"
              onChange={handleChange}
              required
            />

            <BaseInput
              label="New Password"
              type="password"
              name="newPassword"
              placeholder="New Password"
              onChange={handleChange}
              required
            />

            <BaseInput
              label="Confirm New Password"
              type="password"
              name="confirmNewPassword"
              placeholder="Confirm New Password"
              onChange={handleChange}
              required
            />

            {error ? <p className="text-center text-red-500">{error}</p> : null}

            <BaseButton>Confirm</BaseButton>
          </>
        }
        onFormSubmit={handleSubmit}
      />
    </div>
  );
};

export default ChangePasswordPage;
