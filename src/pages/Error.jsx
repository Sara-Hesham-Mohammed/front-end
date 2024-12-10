const ErrorPage = () => {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
        <h1 className="uppercase tracking-widest text-gray-500">
            404 | Not Found
        </h1>

        <a href="javascript:void(0)" className="text-indigo-600 duration-150 hover:text-indigo-400 font-medium inline-flex items-center gap-x-1">
            Go back
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
            </svg>
        </a>
    </div>
  );
};


export default ErrorPage;
