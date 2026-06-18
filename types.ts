import type { Endpoints } from '@octokit/types';

/** One org member from GET /orgs/{org}/members */
export type OrgMember =
  Endpoints['GET /orgs/{org}/members']['response']['data'][number];

/** One org event from GET /orgs/{org}/events */
export type OrgEvent =
  Endpoints['GET /orgs/{org}/events']['response']['data'][number];

/** Public user from GET /users/{username} */
export type GitHubPublicUser =
  Endpoints['GET /users/{username}']['response']['data'];

/** What MemberCard actually needs (plus what you store in users.json) */
export type MemberUser = GitHubPublicUser & {
  events: number;
  last_event_at?: string | null;
};

/** Shape of your cache files */
export type CacheFile<T> = { data: T };
