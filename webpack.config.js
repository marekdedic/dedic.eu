/* eslint-env node */

const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { SubresourceIntegrityPlugin } = require("webpack-subresource-integrity");
const sveltePreprocess = require("svelte-preprocess");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env) => {
  const mode = process.env.NODE_ENV ?? (env.development ? "development" : "production");

  return {
    mode,
    devtool: mode === "development" ? "source-map" : false,
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      new MiniCssExtractPlugin(),
      new SubresourceIntegrityPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.svelte$/,
          use: {
            loader: "svelte-loader",
            options: {
              compilerOptions: {
                dev: mode === "development",
              },
              emitCss: true,
              preprocess: sveltePreprocess({
                postcss: true,
                tsconfigFile: "./tsconfig.json",
              }),
            },
          },
        },
        {
          test: /\.ts$/,
          use: {
            loader: "ts-loader",
            options: {
              onlyCompileBundledFiles: true,
            },
          },
        },
      ],
    },
    resolve: {
      alias: {
        svelte: path.resolve("node_modules", "svelte/src/runtime"),
      },
      conditionNames: ["require", "node", "svelte"],
      extensions: [".ts", ".js"],
      mainFields: ["svelte", "browser", "module", "main"],
    },
    entry: "./src/index.ts",
    output: {
      crossOriginLoading: "anonymous",
      filename: "[name].js",
    },
    optimization: {
      minimize: mode === "production",
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            format: {
              comments: false,
            },
          },
        }),
      ],
      splitChunks: {
        chunks: "all",
      },
    },
  };
};
