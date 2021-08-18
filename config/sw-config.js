module.exports = {
  cache: {
    cacheId: "react-large",
    runtimeCaching: [
      {
        handler: "fastest",
        urlPattern: "/$"
      }
    ],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "react-large",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
