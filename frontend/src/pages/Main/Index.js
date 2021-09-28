import SearchBar from "components/SearchBar.js";

const Index = () => (
  <main>
    <div className="lg:text-center">
      <p className="text-7xl px-50 text-indigo-600 tracking-wide font-extrabold mt-40">
        Incentive layer on StackOverflow
      </p>
    </div>
    <div class="mt-5">
      <SearchBar />
    </div>
  </main>
);

export {Index};
