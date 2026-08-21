// src/hooks/useGitHub.js
import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { FEATURED_PROJECTS } from '../utils/constants';

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

      const profilePromise = axios.get(`${GITHUB_API_BASE}${username}`, config);
      const reposPromises = FEATURED_PROJECTS.map(repo =>
        axios.get(`https://api.github.com/repos/${username}/${repo}`, config).catch(() => null)
      );

      const [profileRes, ...reposResponses] = await Promise.all([
        profilePromise,
        ...reposPromises
      ]);

      const validRepos = reposResponses.filter(res => res !== null).map(res => res.data);

      setProfile(profileRes.data);
      setRepos(validRepos);
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
