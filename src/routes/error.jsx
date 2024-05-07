import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-8">
      <h1>Oops!</h1>
      <div>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="text-center text-red-500">
          <i>Error: {error.statusText || error.message}</i>
        </p>
      </div>

      <Link to="/" className="text-blue-500 underline">
        Go back to the home page
      </Link>
    </div>
  );
};

export default ErrorPage;
