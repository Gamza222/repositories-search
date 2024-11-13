import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import path from "path";
import webpack from "webpack";
import dotenv from "dotenv";
import { type BuildOptions } from "./types/config";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins({
  paths,
  isDev,
  apiUrl,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  dotenv.config();

  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      "process.env.REACT_APP_GITHUB_ACCESS_TOKEN": JSON.stringify(
        process.env.REACT_APP_GITHUB_ACCESS_TOKEN
      ),
      "process.env.REACT_APP_GITHUB_CLIENT_ID": JSON.stringify(
        process.env.REACT_APP_GITHUB_CLIENT_ID
      ),
      "process.env.REACT_APP_GITHUB_SECRET": JSON.stringify(
        process.env.REACT_APP_GITHUB_SECRET
      ),
      "process.env.REACT_APP_GITHUB_REDIRECT_URI": JSON.stringify(
        process.env.REACT_APP_GITHUB_REDIRECT_URI
      ),
      "process.env.REACT_APP_GITHUB_REDIRECT_URI_DEV": JSON.stringify(
        process.env.REACT_APP_GITHUB_REDIRECT_URI_DEV
      ),
    }),
  ];

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());

    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      })
    );
  }

  return plugins;
}
