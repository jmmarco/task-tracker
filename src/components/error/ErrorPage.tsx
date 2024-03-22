interface ErrorPageProps {
  error?: Error;
}

export default function ErrorPage({ error }: ErrorPageProps) {
  const errorMessage = error?.message;

  return (
    <div className="absolute inset-0 m-auto max-h-fit max-w-2xl rounded-md bg-red-100 p-4 shadow-lg">
      <div className="flex">
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">
            Sorry, an unexpected error has occurred.
          </h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>{errorMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
