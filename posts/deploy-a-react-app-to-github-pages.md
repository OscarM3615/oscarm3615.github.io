---
title: 'Deploy a React app to Github Pages'
date: 'July 6, 2021'
tags:
  - react
  - web
  - github
---

Easily deploy a React application using Github Pages.

---

### Prerequisites

- Node
- npm

### Procedure

_Assuming you already have created a React App._

#### 1\. Add remote to Github

If you don't have a Github repo linked to your project, run the following command,
otherwise, skip this step:

```bash
git remote add origin https://github.com/<username>/<repo-name>.git
git push -u origin main # Upload changes to Github
```

#### 2\. Add extra dev dependency gh-pages

Add `gh-pages` to your project as a development dependency:

```bash
npm install gh-pages --save-dev
```

#### 3\. Add deploy script

Open `package.json` and put the homepage url and the deploy script:

```json
{
  "homepage": "https://<username>.github.io/<repo-name>",
  "scripts": {
    "deploy": "gh-pages -d build"
  }
}
```

_If you are deploying to your profile page, `<repo-name>` is not needed._

#### 4\. Build and deploy your app

Run the following commands from terminal:

```bash
npm build # Build your React app for production
npm deploy # Upload build folder to gh-pages branch
```

#### 5\. Set up github repo for Github Pages

Go to your repo on Github, Settings, Pages and select the Source as `gh-pages` branch.

It will display the link to visit your React app.

### Notes

Github Pages does not work well with Single Page Applications, as it doesn't
know how to redirect all the routes to `index.html`, some alternatives are:

- Using `HashRouter` instead of `BrowserRouter` (in case you're using react router).
- Hosting your app in another service (like Firebase).
- Using [the following fix](https://github.com/rafgraph/spa-github-pages).
