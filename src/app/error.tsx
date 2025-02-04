"use client";
const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="my-5 text-center">
      <p className="text-4xl bg-red-500 text-white p-5 w-[50%] mx-auto rounded-xl">
        Something went wrong!!!
      </p>
      <p className="text-4xl bg-red-500 text-white p-5 w-[50%] mx-auto rounded-xl mt-2">
        {error.message}
      </p>
      <button
        onClick={() => reset()}
        className="mt-5 px-4 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-500"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
