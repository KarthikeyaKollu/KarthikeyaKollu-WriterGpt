import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    // Put manual changes here
    // "web_accessible_resources": [
    //   {
    //     "resources": [
    //       "./assets/index.css"
    //     ],
    //     "matches": [
    //       "http://127.0.0.1:5500/*"
    //     ]
    //   }
    // ],

  },
  // runner: {
  //   startUrls: [""],
  // },

});
