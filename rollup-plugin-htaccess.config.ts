import type { Options } from "rollup-plugin-htaccess";

const options: Partial<Options> = {
  extractMetaCSP: {
    defaultPolicyFile: "index.html",
    enabled: true,
    outputDir: "dist",
  },
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
        action: "set",
        always: true,
        header: "Permissions-Policy",
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
        action: "set",
        always: true,
        header: "Referrer-Policy",
        value: "same-origin",
      },
      {
        action: "set",
        always: true,
        header: "Strict-Transport-Security",
        value: {
          includeSubDomains: true,
          maxAge: 31536000,
        },
      },
      {
        action: "set",
        always: true,
        header: "X-Content-Type-Options",
        value: {
          nosniff: true,
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
              conditionPattern: "!=on",
              testString: "%{HTTPS}",
            },
          ],
          flags: {
            last: true,
            qsappend: true,
            redirect: 301,
          },
          pattern: "^(.*)$",
          substitution: "https://%{HTTP_HOST}%{REQUEST_URI}",
        },
        // Remove www.
        {
          conditions: [
            {
              conditionPattern: "^www\\.(.*)$",
              flags: { nocase: true },
              testString: "%{HTTP_HOST}",
            },
          ],
          flags: {
            last: true,
            qsappend: true,
            redirect: 301,
          },
          pattern: "^(.*)$",
          substitution: "http://%1%{REQUEST_URI}",
        },
        // Rewrite non-existent paths to index.html
        {
          flags: {
            last: true,
          },
          pattern: "^index\\.html$",
          substitution: null,
        },
        {
          conditions: [
            {
              conditionPattern: "!-f",
              testString: "%{REQUEST_FILENAME}",
            },
          ],
          flags: {
            last: true,
          },
          pattern: ".",
          substitution: "/index.html",
        },
      ],
    },
  },
};

export default options;
