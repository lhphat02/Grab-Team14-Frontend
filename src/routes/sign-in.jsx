import { Link, useNavigate } from 'react-router-dom';
import CONSTANTS from '../constants/constant';
import BaseInput from '../components/common/BaseInput';
import AuthFormLayout from '../components/layouts/AuthFormLayout';
import { useState } from 'react';
import { isMailValid } from '../utils/checker';
import BaseButton from '../components/common/BaseButton';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { doLogin } from '@app/store/slices/authSlice';
const SignInPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();


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

    dispatch(doLogin({ email, password}))
      .unwrap()
      .then(data => {
        console.log('data', data);
        return data;
      })
      .then(() =>     navigate(CONSTANTS.ROUTES.JOB_LIST)      )
      .catch((err) => {
        console.log(err);
      });

  };

  // console.log('Form data: ', formData);
  console.log('Error: ', error);

  return (
    <div className="items-center justify-center bg-gray-100 container-page">
      <AuthFormLayout
        title="Sign In"
        formDetails={
          <>
            <BaseInput
              label="Email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />

            <BaseInput
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />

            {error ? <p className="text-center text-red-500">{error}</p> : null}

            <BaseButton>Sign In</BaseButton>
          </>
        }
        onFormSubmit={handleSubmit}
        footer={
          <>
            <p className="">Don&apos;t have an account?</p>
            <Link to={CONSTANTS.ROUTES.SIGN_UP}>
              <p className="underline text-prim-1">Sign Up</p>
            </Link>
          </>
        }
      />
    </div>
  );
};

export default SignInPage;
