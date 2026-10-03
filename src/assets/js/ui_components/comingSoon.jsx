/*
  Path: src/assets/js/ui_components/comingSoon.jsx
  Description: Coming-soon landing section for the personal website.
  Author: Richard Anderson
  Last Updated: 03-October-2026.
  Version: 1.0.5
*/

// Import React library for creating components.
import { useLatestCommit } from '../hooks/useLatestCommit.js';

const ComingSoon = () => {
  // Extract GitHub URL from importantLinks data (falling back safely if needed)
  const repository = { owner: 'richardjanderson9', name: 'ha-wallpanel' };
  const githubUrl = `https://github.com/${repository.owner}/${repository.name}`;
  const { latestCommit, commitUnavailable } = useLatestCommit(
    repository.owner,
    repository.name
  );

  // Coming Soon Render.
  return (
    <div className="coming-soon-wrapper">
      {/* Page heading with gradient */}
      <h1 className="coming-soon-heading">Coming Soon</h1>
      
      {/* Subtext with typing effect */}
      <p className="coming-soon-sub">Something great is on its way. Check back later!</p>

      {/* GitHub Link Button */}
      <a 
        href={githubUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="github-button"
      >
        GitHub Repository
      </a>

      <p className="github-last-commit" aria-live="polite">
        Latest commit: {latestCommit ? (
          <a
            href={latestCommit.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <time dateTime={latestCommit.date}>
              {new Date(latestCommit.date).toLocaleString(undefined, {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </time>
          </a>
        ) : commitUnavailable ? (
          "Unavailable"
        ) : (
          "Checking..."
        )}
      </p>
    </div>
  );
};

export default ComingSoon;