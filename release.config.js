module.exports = {
  branches: ["main"],
  repositoryUrl: "https://github.com/radoscis/gh-reactapp.git",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        assets: [
          { path: "build.zip", label: "Build-Folder" },
          { path: "coverage.zip", label: "Coverage-Reports" }
        ]
      }
    ]
  ]
};
