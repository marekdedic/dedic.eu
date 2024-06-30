import type { Options } from "rollup-plugin-htaccess";

/* eslint-disable @typescript-eslint/naming-convention -- Most of these are things like header names */
const options: Partial<Options> = {
  template: "htaccess-template.txt",
  spec: {
    Options: {
      minus: ["Indexes"],
    },
  },
};
/* eslint-enable -- Re-enable naming-convention */

export default options;
