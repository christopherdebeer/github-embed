github-embed
============

Easily embed documents from github.com into any web page as content, whether it be `code` or Markdown

Infact this projects homepage is rendered in exactly the same way, by visiting [http://christopherdebeer.github.io/github-embed/](http://christopherdebeer.github.io/github-embed/) and not adding a url parameter to the end, it defaults to showing it's own `README.md` markdown file from github. neat.

Usage
=====

Just create an `iframe` pointing to [http://christopherdebeer.github.io/github-embed/](http://christopherdebeer.github.io/github-embed/) and add the query parameter url with the location of the document you'd like to render like so:

    <iframe src="http://christopherdebeer.github.io/github-embed/?url=http://github.com/username/myrepo/blob/master/Example.md"></iframe>

Production
----------
Please not that should you need to use this in a production environment, we highly recommend forking/cloning this repo and hosting it yourself.




