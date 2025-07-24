// src/hooks/useGitHub.js
import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const GITHUB_API_BASE = 'https://api.github.com/users/';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const useGitHub = (username) => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos]       = useState([]);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState(null);

  const fetchData = useCallback(async () => {
    if (!username) return;

    setLoading(true);
    setError(null);
    try {
      const config = { headers: {} };
      if (GITHUB_TOKEN) {
        config.headers.Authorization = `token ${GITHUB_TOKEN}`;
      }

      const [profileRes, reposRes] = await Promise.all([
        axios.get(`${GITHUB_API_BASE}${username}`, config),
        axios.get(
          `${GITHUB_API_BASE}${username}/repos?sort=updated&direction=desc&per_page=6`,
          config
        ),
      ]);

      setProfile(profileRes.data);
      setRepos(reposRes.data);
    } catch (err) {
      const status = err.response?.status;
      if (status === 404) setError('User not found');
      else if (status === 403) setError('Rate limit exceeded');
      else setError('Unable to fetch GitHub data');
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { profile, repos, loading, error, reload: fetchData };
};
