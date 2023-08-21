import type { App, Plugin } from 'vue';
import type { Router } from 'vue-router';
import { createPinia } from 'pinia';
import type { Authentication } from '@src/models/authentication';

export type PluginOptions = {
  router: Router;
  domain: string;
  clientId: string;
  scope: string;
  onAfterAuthenticated?: (newAuthentication: Authentication) => Promise<void>;
};

let pluginOptions: PluginOptions | null = null;

let router: Router | null = null;

export function getRouter() {
  return router;
}

export function getPluginOptions() {
  if (pluginOptions === null) {
    throw new Error('Authentication plugin has not been initialized.');
  }
  return pluginOptions;
}

export default (options: PluginOptions) => {
  pluginOptions = options;
  router = options.router;

  const plugin: Plugin = {
    install(app: App) {
      if (!app.config.globalProperties.$pinia) {
        app.use(createPinia());
      }
    },
  };

  return plugin;
};
