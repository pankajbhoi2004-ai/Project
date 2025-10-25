import axios from "axios";

const BASE_URL = "https://api.github.com";

export async function fetchTrendingRepos(language = "", sort = "stars", order = "desc") {
  const q = language ? `language:${language}` : "stars:>100";
  const url = `${BASE_URL}/search/repositories?q=${q}&sort=${sort}&order=${order}&per_page=20`;
  const res = await axios.get(url);
  return res.data.items;
}

export async function fetchRepoStats(owner, repo) {
  const [issues, contributors] = await Promise.all([
    axios.get(`${BASE_URL}/repos/${owner}/${repo}/issues?per_page=100`),
    axios.get(`${BASE_URL}/repos/${owner}/${repo}/contributors?per_page=100`),
  ]);
  return {
    issues: issues.data.length,
    contributors: contributors.data.length,
  };
}
