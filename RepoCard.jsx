import React, { useState } from "react";

export default function RepoCard({ repo, toggleBookmark, bookmarks }) {
  const [note, setNote] = useState("");
  const isBookmarked = bookmarks.some(r => r.id === repo.id);

  const saveNote = () => {
    localStorage.setItem(`note-${repo.id}`, note);
    alert("Note saved!");
  };

  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-md transition">
      <h3 className="text-lg font-semibold">
        <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-blue-600">
          {repo.full_name}
        </a>
      </h3>
      <p className="text-sm text-gray-600 line-clamp-2 mt-1">{repo.description}</p>

      <div className="flex justify-between mt-3 text-sm">
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
        <span>🗓️ {new Date(repo.updated_at).toLocaleDateString()}</span>
      </div>

      <button
        onClick={() => toggleBookmark(repo)}
        className={`mt-3 w-full py-1 rounded ${isBookmarked ? "bg-red-500 text-white" : "bg-gray-200"}`}
      >
        {isBookmarked ? "Remove Bookmark" : "Bookmark"}
      </button>

      <textarea
        className="border p-2 w-full mt-2 text-sm rounded"
        placeholder="Add notes..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button onClick={saveNote} className="mt-1 w-full bg-yellow-400 py-1 rounded">Save Note</button>
    </div>
  );
}
