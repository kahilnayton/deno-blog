/** @jsx h */
import { h } from "preact";
import { useRef, useState } from "preact/hooks";
import { SearchElement } from "../utils/search.ts";

export default function SearchBar() {
  const inputField = useRef(null);
  const [results, setResults] = useState<SearchElement[]>([]);

  async function doSearch() {
    // TODO: fix ts value
    if (inputField.current) {
      const res = await fetch(
        "/api/search?" + new URLSearchParams({
          q: inputField.current.value,
        }),
      );
      setResults(await res.json());
    }
  }

  return (
    <div class="border-blue-100">
      <input
        class="bg-green-500 flex"
        value=""
        ref={inputField}
        placeholder="Enter your search query..."
        onChange={doSearch}
      />
      <ul className="results">
        {results.map((r) => {
          return (
            <li class="pt-4">
              <a href={r.path} class="text-blue-600">{r.path}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
