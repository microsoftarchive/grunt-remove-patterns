grunt-remove-patterns
=====================

Remove files and folders matching patters

## How to install

    npm install --save grunt-remove-patterns

## How to use

Here's an example of a config that would remove all dotfiles, Makefiles and node_modules folders, recursively.

```
{
  "options": {
    "dir": "build",
    "patterns": [
      "**/node_modules",
      "**/.*",
      "**/Makefile"
    ]
  }
}
```