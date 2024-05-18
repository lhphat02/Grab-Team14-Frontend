import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BaseInput from '../components/common/BaseInput';
import CONSTANTS from '../constants/constant';
import { isMailValid } from '../utils/checker';
import AuthFormLayout from '../components/layouts/AuthFormLayout';
import BaseButton from '../components/common/BaseButton';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(null);

  // Function to handle form input changes
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setError(null);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (!email || !password || !confirmPassword) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!isMailValid(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    navigate(CONSTANTS.ROUTES.JOB_LIST);
  };

  // console.log('Form data: ', formData);
  console.log('Error: ', error);

  return (
    <div className="items-center justify-center bg-gray-100 container-page">
      <AuthFormLayout
        title="Sign Up"
        formDetails={
          <>
            <BaseInput
              label="Email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
              required
            />

            <BaseInput
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
              required
            />

            <BaseInput
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={formData.confirmPassword}
              required
            />

            {error ? <p className="text-center text-red-500">{error}</p> : null}

            <BaseButton>Sign Up</BaseButton>
          </>
        }
        onFormSubmit={handleSubmit}
        footer={
          <>
            <p className="">Already have an account?</p>
            <Link to={CONSTANTS.ROUTES.SIGN_IN}>
              <p className="underline text-prim-1">Sign In</p>
            </Link>
          </>
        }
      />
    </div>
  );
};

export default SignUpPage;
