module.exports = {
    branches: ["master"],
    repositoryUrl: "https://github.com/radoscis/gh-reactapp.git",
    plugins: ['@semantic-release/commit-analyzer', '@semantic-release/release-notes-generator',
              '@semantic-release/github']
}