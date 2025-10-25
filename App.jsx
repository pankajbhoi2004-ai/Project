import React, { useState, useEffect } from "react";
import { fetchTrendingRepos } from "./utils/githubAPI";
import Filters from "./components/Filters";
import RepoCard from "./components/RepoCard";
import ChartsPanel from "./components/ChartsPanel";
import Bookmarks from "./components/Bookmarks";

export default function App() {
  const [repos, setRepos] = useState([]);
  const [language, setLanguage] = useState("");
  const [sort, setSort] = useState("stars");
  const [search, setSearch] = useState("");
  const [bookmarks, setBookmarks] = useState(JSON.parse(localStorage.getItem("bookmarks")) || []);

  useEffect(() => {
    (async () => {
      const data = await fetchTrendingRepos(language, sort);
      setRepos(data);
    })();
  }, [language, sort]);

  const filteredRepos = repos.filter(repo =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleBookmark = (repo) => {
    let updated = [...bookmarks];
    const exists = updated.find(r => r.id === repo.id);
    if (exists) updated = updated.filter(r => r.id !== repo.id);
    else updated.push(repo);
    setBookmarks(updated);
    localStorage.setItem("bookmarks", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">⭐ GitHub Project Explorer</h1>

      <Filters language={language} setLanguage={setLanguage} sort={sort} setSort={setSort} search={search} setSearch={setSearch} />

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {filteredRepos.map(repo => (
          <RepoCard key={repo.id} repo={repo} toggleBookmark={toggleBookmark} bookmarks={bookmarks} />
        ))}
      </div>

      <ChartsPanel repos={filteredRepos} />

      <Bookmarks bookmarks={bookmarks} toggleBookmark={toggleBookmark} />
    </div>
  );
}
