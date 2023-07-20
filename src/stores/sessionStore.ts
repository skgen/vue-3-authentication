import { defineStore } from 'pinia';
import type { Authentication } from '@src/models/authentication';
import packageName from '@src/lib/packageName';
import { AuthenticationStep } from '@src/lib/enums';

type SessionStoreState = {
  authentication: Authentication | null;
  authenticationStep: AuthenticationStep;
};

export const useSessionStore = defineStore({
  id: `${packageName}:session`,
  state: (): SessionStoreState => ({
    authentication: null,
    authenticationStep: AuthenticationStep.DISCONNECTED,
  }),
  getters: {
    authenticated: (state) => state.authentication !== null
    && state.authenticationStep === AuthenticationStep.AUTHENTICATED,
  },
});
