import SearchBar from "components/SearchBar.js";

const Index = () => (
  <main>
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-50 text-indigo-600 tracking-wide font-extrabold mt-40">
        Incentive layer on StackOverflow
      </p>
    </div>

    <div class="mt-5">
      <SearchBar />
    </div>
  </main>
);

export {Index};
