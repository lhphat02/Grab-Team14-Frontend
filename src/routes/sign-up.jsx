import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BaseButton from '../components/common/Button/BaseButton';
import BaseInput from '../components/common/BaseInput';
import CONSTANTS from '../constants/constant';
import { isMailValid } from '../utils/checker';

const SignUpPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setError(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password, confirmPassword } = formData;

    if (!email || !password || !confirmPassword) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!isMailValid(email)) {
      setError('Invalid email address.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError(null);
    navigate(CONSTANTS.ROUTES.JOB_LIST);
  };

  console.log('Form data: ', formData);
  console.log('Error: ', error);

  return (
    <div className="justify-center bg-gray-100 container-page">
      <div className="flex flex-col w-full max-w-screen-sm px-6 py-4 space-y-6 bg-white shadow-md md:px-12 md:py-8 md:space-y-8 md:w-2/3 rounded-xl">
        <div className="md:space-y-2">
          <h1 className="font-black text-center text-prim-1">emploi</h1>
          <h5 className="font-semibold text-center text-prim-1">
            Creating account
          </h5>
        </div>

        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          <BaseInput
            label="Email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
          <BaseInput
            label="Password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            type="password"
            required
          />
          <BaseInput
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm your password"
            onChange={handleChange}
            type="password"
            required
          />

          {error && <p className="text-center text-red-500">{error}</p>}
          <BaseButton className="py-2 text-white rounded-full bg-prim-1">
            Sign Up
          </BaseButton>
        </form>

        <div className="flex flex-col items-center justify-center w-full space-x-2 md:flex-row">
          <p>Already have an account?</p>
          <Link to={CONSTANTS.ROUTES.SIGN_IN}>
            <p className="underline text-prim-1">Sign in here</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
