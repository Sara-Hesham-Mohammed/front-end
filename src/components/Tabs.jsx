{/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

const Tabs = () => {
return (<>
  <div className="sm:hidden">
    <label htmlFor="Tab" className="sr-only">Tab</label>

    <select id="Tab" className="w-full rounded-md border-gray-200">
      <option>Top Headlines</option>
      <option>Following</option>
    </select>
  </div>

  <div className="hidden sm:block">
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex gap-6" aria-label="Tabs">
        <a
          href="#"
          className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Top Headlines
        </a>

        <a
          href="#"
          className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Following
        </a>

      </nav>
    </div>
  </div>
</>)
}

export default Tabs;