# Black Desert Analytics Bootstrap theme

Hugo version of the original Balzorx design, revamped by Splitfire.

Nodejs/npm environment is required to install everything.

https://docs.npmjs.com/getting-started/installing-node
### Install deps
npm install

### Run developpement (sass/js compilation with watcher)

npm run dev

### Build static assets (clean and rebuild the static directory)

npm run build

You can directly modify bootstrap using sass in the src/styles directory. Variables and pre-variables should go in the existing scss files in the bootstrap folder. Use npm run dev while developping on top of hugo server to achieve live reload.

app.sccs should import every other custom file. Use a directory structure that make sense.

Informations about the templating language/layout on the hugo [website](http://gohugo.io/themes/).

The default article page is layout/_default/single.html

Contact me if you have questions.
