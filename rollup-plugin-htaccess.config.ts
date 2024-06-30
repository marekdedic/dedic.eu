import type { Options } from "rollup-plugin-htaccess";

/* eslint-disable @typescript-eslint/naming-convention -- Most of these are things like header names */
const options: Partial<Options> = {
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
    rewrite: {
      rules: [
        // Upgrade to HTTPS
        {
          conditions: [
            {
              testString: "%{HTTPS}",
              conditionPattern: "!=on",
            },
          ],
          pattern: "^(.*)$",
          substitution: "https://%{HTTP_HOST}%{REQUEST_URI}",
          flags: {
            last: true,
            qsappend: true,
            redirect: 301,
          },
        },
        // Remove www.
        {
          conditions: [
            {
              testString: "%{HTTP_HOST}",
              conditionPattern: "^www\\.(.*)$",
              flags: { nocase: true },
            },
          ],
          pattern: "^(.*)$",
          substitution: "http://%1%{REQUEST_URI}",
          flags: {
            last: true,
            qsappend: true,
            redirect: 301,
          },
        },
        // Rewrite non-existent paths to index.html
        {
          pattern: "^index\\.html$",
          substitution: null,
          flags: {
            last: true,
          },
        },
        {
          conditions: [
            {
              testString: "%{REQUEST_FILENAME}",
              conditionPattern: "!-f",
            },
            {
              testString: "%{REQUEST_FILENAME}",
              conditionPattern: "!-d",
            },
          ],
          pattern: ".",
          substitution: "/index.html",
          flags: {
            last: true,
          },
        },
      ],
    },
  },
};
/* eslint-enable -- Re-enable naming-convention */

export default options;
