The site is made in [VueJS](vuejs.org). If for some reason you feel the urge to fork my site and try to make it your own it's built from the 'dev' branch.

The 'master' branch is the result of the builds and what github looks for when serving to [[username].github.com](https://plachenko.github.com) pages. You will have to replace the username with yours and set up github pages with your account. These are the built html assets.

The 'dev' branch contains the 'pre-compiled' VueJS files. Use the readme on that branchfor various npm commands.

I add two personal convenience commands:

* deploy - Invokes [gh-pages](https://www.npmjs.com/package/gh-pages) (not included in package.json-- you should install and configure it globally.)

* bnd - Build and Deploy. Runs **build** command then runs **deploy** command.

!!NOTE: the site currently uses local storage to store an API call to my gist and repo account. [This will change](https://github.com/plachenko/plachenko.github.io/issues/4)!!

One thing spa pages on github suffer from is correct path routing. The magic is done through the 404.html page which I found from [Rafael Pedicini](https://github.com/rafgraph/spa-github-pages).

Feel free to add issues, missing pages, feature requests or personal complaints on my [issues page](https://github.com/plachenko/plachenko.github.io/issues).

ThA A A A AAAA A AA A AAAAaAA ahAAAaAAAAAAAAAAAAAaaAAAAAAAAAAAAAAAAAA aa AAA aAhahahahaAAAAAAAAAAAAAAAA aaaa n k you.
