import type { Authentication } from '@src/models/authentication';
import { useSessionStore } from '@src/stores/sessionStore';

export function getAuthentication(): Authentication | null {
  const sessionStore = useSessionStore();
  return sessionStore.authentication;
}
