import type { Options } from "rollup-plugin-htaccess";

/* eslint-disable @typescript-eslint/naming-convention -- Most of these are things like header names */
const options: Partial<Options> = {
  template: "htaccess-template.txt",
  spec: {
    AddOutputFilterByType: [
      {
        filters: ["DEFLATE"],
        mediaTypes: [
          "text/plain",
          "text/html",
          "text/css",
          "application/javascript",
          "application/json",
        ],
      },
    ],
    Header: [
      {
        header: "Permissions-Policy",
        always: true,
        action: "set",
        value: {
          camera: {},
          "display-capture": {},
          fullscreen: { self: true },
          geolocation: {},
          microphone: {},
          "web-share": {},
        },
      },
      {
        header: "Referrer-Policy",
        always: true,
        action: "set",
        value: "same-origin",
      },
      {
        header: "Strict-Transport-Security",
        always: true,
        action: "set",
        value: {
          maxAge: 31536000,
          includeSubDomains: true,
        },
      },
      {
        header: "X-Content-Type-Options",
        always: true,
        action: "set",
        value: {
          nosniff: true,
        },
      },
      {
        header: "X-Frame-Options",
        always: true,
        action: "set",
        value: "deny",
      },
      {
        header: "X-Xss-Protection",
        always: true,
        action: "set",
        value: {
          mode: "block",
        },
      },
    ],
    Options: {
      minus: ["Indexes"],
    },
  },
};
/* eslint-enable -- Re-enable naming-convention */

export default options;
