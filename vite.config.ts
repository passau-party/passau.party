import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    VitePWA(
      {
        registerType: "autoUpdate",
        devOptions: {
          enabled: true
        },
        includeAssets: ["android-icon-36x36.png","android-icon-48x48.png","android-icon-72x72.png", "android-icon-96x96.png", "android-icon-144x144.png", "android-icon-192x192.png"],
        manifest: {
          name: "passau.party",
          short_name: "passau.party",
          description: "A chat for party people in Passau",
          theme_color: "#ffffff",
          start_url: "/",
          display: "standalone",
          icons: [
            {
             "src": "\/android-icon-36x36.png",
             "sizes": "36x36",
             "type": "image\/png",
             "density": "0.75"
            },
            {
             "src": "\/android-icon-48x48.png",
             "sizes": "48x48",
             "type": "image\/png",
             "density": "1.0"
            },
            {
             "src": "\/android-icon-72x72.png",
             "sizes": "72x72",
             "type": "image\/png",
             "density": "1.5"
            },
            {
             "src": "\/android-icon-96x96.png",
             "sizes": "96x96",
             "type": "image\/png",
             "density": "2.0"
            },
            {
             "src": "\/android-icon-144x144.png",
             "sizes": "144x144",
             "type": "image\/png",
             "density": "3.0"
            },
            {
             "src": "\/android-icon-192x192.png",
             "sizes": "192x192",
             "type": "image\/png",
             "density": "4.0"
            }
           ]
        }
      }
      )
    ],
})
