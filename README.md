# Portfolio-Flandre-Corentin

## How to deploy on username.github.io

1. Build artifact in the /docs/ repository
```
ng build --output-path docs --base-href /docs/
```

2. Probably need to remove the *docs/* of the index.html generated if 404 error when trying to fetch js files

3. Copy *docs/index.html* and rename *404.html* (Default fall page)

4. Commit on your branch *gh-pages* and push on your username.github.io repository

5. Go on your GitHub repository and settings/pages option
