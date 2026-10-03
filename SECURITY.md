# Security Policy

## Supported Versions

| Version      | Supported          |
| ------------ | ------------------ |
| 1.0.x        | :white_check_mark: |
| < 1.0.0      | :x:                |

## Security Update Process

Security updates will be released as patch versions for the currently supported version.

## Security-Related Configuration

This project comes with several security-focused configurations:

- Strict CSP headers
- Security-focused ESLint rules
- NPM audit checks in CI/CD

## GitHub Security Features

This project leverages GitHub's built-in security features to help maintain code quality and security:

- **Code scanning**: Automated analysis to detect vulnerabilities and errors in the codebase.
- **Dependabot alerts and updates**: Automated alerts and pull requests for vulnerable dependencies.
- **Secret scanning**: Detection of accidentally committed secrets in the repository.
- **Security advisories**: Private advisories and coordinated disclosure for vulnerabilities.