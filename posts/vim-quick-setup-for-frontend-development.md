---
title: 'Vim quick setup for frontend development'
date: 'June 24, 2021'
tags:
  - vim
  - web
  - frontend
---

Set up vim and plugins for frontend web development.

---

<!-- markdownlint-disable MD033-->

### What's included?

#### Plugins

- vim-startify: Start page
- nerdtree: File explorer
- vim-devicons: Display file icons in NerdTree
- vim-floaterm: Floating terminal
- vim-coc: Language server
- vim-http: REST client
- vim-css-color: css colour previews

#### Shortcuts

- Git workflow
- Language server shortcuts (diagnostics, renaming, formatting)
- Toggle floating terminals

#### Theme

Current configuration uses [One Dark](https://github.com/joshdick/onedark.vim)
as the editor theme.

### Recommended tools

- Any Nerd Font (recommended is Fira Code)
- npm
- yarn
- git
- lazygit
- ranger

### Installation

**Note:** Check that directory `.vim` does not exist in your home directory first.

Step 1. Clone the `OscarM3615/vim` to the `.vim` directory:

```plaintext
git clone https://github.com/OscarM3615/vim.git .vim
```

Step 2. Start vim from any directory, plugins will be installed automatically:

```plaintext
vim
```

_Some errors may be displayed, just press <kbd>Enter</kbd> and let the
installation continue._

Vim will be restarted and _Startify_ page will be shown.

Step 3 (optional). Install some CoC extensions, inside vim:

```plaintext
:CocInstall coc-prettier coc-emmet coc-tsserver coc-json coc-css coc-angular
```

_Any additional extension can be added or removed._
