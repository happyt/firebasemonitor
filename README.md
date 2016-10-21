## Election tester

- Web server of page to show results, connecting to firebase
- Timer in the server to read the Leeds feed and write to firebase

### Structure
- top level - server
    - public
        - src - source files
            - components
        - dist - compiled files

### Installs
- taken from [`https://www.typescriptlang.org/docs/handbook/react-&-webpack.html`](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)
- npm install -g typescript
- npm install -g webpack  (didn't take both together...?)
- npm install --save react react-dom @types/react @types/react-dom
- npm install --save-dev ts-loader source-map-loader
- npm link typescript  ( or could have done `npm install typescript`)
- add `tsconfig.json`
- src/components/hello.tsx
- src/index.tsx
- index.html
- webpack.config.json
