import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://speakingofsneha.github.io/sneha.work.github.io/', // your deployed URL
  base: '/sneha.work.github.io/', // your GitHub repo name with slashes
});
