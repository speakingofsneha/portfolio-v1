import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
// https://chatgpt.com/share/68145399-11c8-800f-be1d-6039fd868147
export default defineConfig({
  integrations: [react()],
  site: 'https://speakingofsneha.github.io/sneha.work.github.io/', // your deployed URL 
});
