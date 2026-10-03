#
#  Path: Dockerfile
#  Description: Multi-stage Docker build for the React/Vite application served by Nginx.
#  Author: Richard Anderson
#  Last Updated: 03-October-2026.
#  Version: 1.0.0
#  Note: Uses a Node 22 build stage and a secure unprivileged Nginx runtime image.
#

# ==========================================
# Stage 1: Build Stage
# ==========================================
# Uses the latest dynamic Node 22 Alpine image
FROM node:22-alpine AS build
WORKDIR /app

# Install dependencies first to optimize Docker's layer caching.
# package files are copied independently so dependencies aren't re-installed on every source code change.
COPY package*.json ./
RUN npm ci && npm cache clean --force

# Copy the rest of the source code and trigger the production build.
# Note: Vite is configured to output compiled assets to the 'build/' directory.
COPY . .
RUN npm run build


# ==========================================
# Stage 2: Production Stage
# ==========================================
# Uses a secure, vulnerability-free Nginx unprivileged Alpine slim image
FROM nginxinc/nginx-unprivileged:1.30.4-alpine3.24-slim

# Copy the compiled static assets from the build stage into Nginx's public web directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx routing and server configuration over the default template
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Document and expose port 8080 (Unprivileged system ports must be > 1024)
EXPOSE 8080

# Start Nginx in the foreground so container lifecycle management works properly
CMD ["nginx", "-g", "daemon off;"]