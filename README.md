# Portfolio

Portfolio site written in [Vuepress](https://vuepress.vuejs.org/).

## Running Instructions

#### Install dependencies:
```shell
npm install
```

#### Run in Dev mode:
```shell
npm run dev
```
Site is available on [http://localhost:3031](http://localhost:8080).

## Deployment

To deploy to Github Pages run the deploy script `./deploy.sh`.

This runs the `npm run build` command which generates the site as
static content in the `src/.vuepress/dist` folder.

It then pushes the contents of the `dist` folder to the 
[add-harris.github.io](https://github.com/add-harris/add-harris.github.io)
repo. Here it is hosted at https://add-harris.github.io/ via Github Pages.
