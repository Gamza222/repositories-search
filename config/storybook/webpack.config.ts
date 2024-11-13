/* eslint-disable array-callback-return */
import path from "path";
import type webpack from "webpack";

import { type BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { DefinePlugin, type RuleSetRule } from "webpack";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  const alias: { [key: string]: string } = {
    app: path.resolve(paths.src, "app"),
    shared: path.resolve(paths.src, "shared"),
    entities: path.resolve(paths.src, "entities"),
    features: path.resolve(paths.src, "features"),
    widgets: path.resolve(paths.src, "widgets"),
    pages: path.resolve(paths.src, "pages"),
  };
  config.resolve = config.resolve || {};

  // Merge aliases
  config.resolve.alias = { ...(config.resolve.alias || {}), ...alias };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".ts", ".tsx");
  // eslint-disable-next-line no-param-reassign, @typescript-eslint/ban-ts-comment

  if (config.module && config.module.rules) {
    // @ts-expect-error
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
      // if ((rule.test as string).includes('svg')) {
      //     return { ...rule, exclude: /\.svg$/i }
      // }
      return rule;
    });
  }
  config.module?.rules?.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  });
  // config.module?.rules?.push(buildCssLoader(false));

  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: true,
      __API__: JSON.stringify(""),
    })
  );
  return config;
};
