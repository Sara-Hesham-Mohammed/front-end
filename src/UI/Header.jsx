const Header = (props) => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Headline
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">Description</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
