const NewsLetter = () => {
  return (
    <section className="py-20 mx-auto container max-w-4xl px-8">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center">
        <p className="text-gray-500 font-semibold">
          Be the first to get The Insights
        </p>

        <div className="flex items-start flex-col gap-4 md:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button className="w-full md:w-auto px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
