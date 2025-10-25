import React from "react";

export default function Filters({ language, setLanguage, sort, setSort, search, setSearch }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center items-center bg-white p-4 rounded shadow">
      <input
        type="text"
        placeholder="Search repositories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-3 py-2 rounded w-64"
      />
      <select value={language} onChange={(e) => setLanguage(e.target.value)} className="border px-3 py-2 rounded">
        <option value="">All Languages</option>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="typescript">TypeScript</option>
        <option value="go">Go</option>
      </select>
      <select value={sort} onChange={(e) => setSort(e.target.value)} className="border px-3 py-2 rounded">
        <option value="stars">Sort by Stars</option>
        <option value="updated">Last Updated</option>
      </select>
    </div>
  );
}
