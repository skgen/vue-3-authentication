import type { App, Plugin } from 'vue';
import { createPinia } from 'pinia';
import type { Authentication } from '@src/models/authentication';

export type PluginOptions = {
  domain: string;
  clientId: string;
  scope: string;
  onAfterAuthenticated?: (newAuthentication: Authentication) => Promise<void>;
};

let pluginOptions: PluginOptions | null = null;

export function getPluginOptions() {
  if (pluginOptions === null) {
    throw new Error('Authentication plugin has not been initialized.');
  }
  return pluginOptions;
}

export default (options: PluginOptions) => {
  pluginOptions = options;

  const plugin: Plugin = {
    install(app: App) {
      if (!app.config.globalProperties.$pinia) {
        app.use(createPinia());
      }
    },
  };

  return plugin;
};
