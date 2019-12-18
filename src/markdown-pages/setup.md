---
title: Setup environment
---

# Setup environment

The new Gatsby Docs site uses MDX to support more interactive documentation that uses JavaScript-based components.

To begin developing documentation for this site, clone the [gatsby-doc-site repository][repo] and follow the instructions in the `README.md` file.

Store topic files in the `src/markdown-pages` folder. You can use normal markdown or MDX.

## Yarn commands

This site uses the Yarn package manager. The following Yarn commands call a script in the `package.json` file that can assist with your site development:

| Command         | Description                                                                               |
| --------------- | ----------------------------------------------------------------------------------------- |
| `yarn clean`    | Removes build artifacts and stale data                                                    |
| `yarn develop`  | Uses the `package.json` file to launch site                                               |
| `yarn prettier` | Automatically corrects the formatting of JS, JSX, MD, and MDX files                       |
| `yarn test`     | Checks the formatting of JS, JSX, MD, and MDX files and lists files that are in violation |

<!-- link definitions -->

[repo]: https://github.com/jcalcaben/gatsby-doc-site
