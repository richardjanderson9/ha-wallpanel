/*
  Path: src/assets/js/hooks/useLatestCommit.js
  Description: React hook for fetching the latest commit from a GitHub repository.
  Author: Richard Anderson
  Last Updated: 03-October-2026.
  Version: 1.0.1
  Note: Aborts the request on unmount and exposes commit data and availability state.
*/

import { useEffect, useState } from 'react';

export const useLatestCommit = (owner, repository) => {
  const [latestCommit, setLatestCommit] = useState(null);
  const [commitUnavailable, setCommitUnavailable] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchLatestCommit = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repository}/commits?per_page=1`,
          {
            headers: {
              Accept: 'application/vnd.github+json',
              'X-GitHub-Api-Version': '2022-11-28',
            },
            signal: abortController.signal,
          }
        );

        if (!response.ok) {
          throw new Error('Could not load the latest commit.');
        }

        const [commit] = await response.json();
        const commitDate =
          commit?.commit?.committer?.date ?? commit?.commit?.author?.date;

        if (!commitDate || !commit.html_url) {
          throw new Error('The latest commit did not include a date.');
        }

        setLatestCommit({ date: commitDate, url: commit.html_url });
      } catch (error) {
        if (error.name !== 'AbortError') {
          setCommitUnavailable(true);
        }
      }
    };

    fetchLatestCommit();
    return () => abortController.abort();
  }, [owner, repository]);

  return { latestCommit, commitUnavailable };
};