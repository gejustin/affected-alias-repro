Nx workspace that reproduces https://github.com/nrwl/nx/issues/13228 where adding or modifying aliased npm packages breaks `nx affected` commands.

Steps to reproduce:

1. yarn nx affected --target=lint --base=HEAD^
