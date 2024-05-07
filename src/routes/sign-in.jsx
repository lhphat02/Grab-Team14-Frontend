import { Link, useNavigate } from 'react-router-dom';
import BaseButton from '../components/common/Button/BaseButton';
import CONSTANTS from '../constants/constant';
import BaseInput from '../components/common/BaseInput';

const SignInPage = () => {
  const navigate = useNavigate();

  return (
    <div className="justify-center bg-gray-100 container-page">
      <div className="flex flex-col w-full max-w-sm px-6 py-4 space-y-6 bg-white shadow-md md:px-12 md:py-8 md:space-y-8 rounded-xl">
        <div className="md:space-y-2">
          <h1 className="font-black text-center text-prim-1">emploi</h1>

          <h5 className="font-semibold text-center text-prim-1">
            {' '}
            Simplify your career
          </h5>
        </div>

        <form
          className="flex flex-col space-y-6"
          onSubmit={() => navigate(CONSTANTS.ROUTES.JOB_LIST)}
        >
          <BaseInput label="Email" placeholder="Enter your email" />
          <BaseInput
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
          <BaseButton className="py-2 text-white rounded-full bg-prim-1">
            Sign In
          </BaseButton>
        </form>

        <div className="flex flex-col items-center justify-center w-full space-x-2 md:flex-row">
          <p>Don&apos;t have an account?</p>
          <Link to={CONSTANTS.ROUTES.SIGN_UP}>
            <p className="underline text-prim-1">Sign up here</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
