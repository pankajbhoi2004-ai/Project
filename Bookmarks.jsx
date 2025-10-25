import React from "react";

export default function Bookmarks({ bookmarks, toggleBookmark }) {
  if (!bookmarks.length) return null;

  return (
    <div className="bg-white mt-8 p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-3">Bookmarked Repositories</h2>
      <ul className="space-y-2">
        {bookmarks.map((repo) => (
          <li key={repo.id} className="flex justify-between items-center border-b pb-1">
            <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-blue-600">{repo.full_name}</a>
            <button onClick={() => toggleBookmark(repo)} className="text-red-500 text-sm">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
