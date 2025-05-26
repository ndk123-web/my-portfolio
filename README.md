## What is happening?

- `layout.js` is the main layout file; all route components are rendered inside it.

- The App Router (using the `app` directory) is the main routing system. Any file named `page.js` inside a folder is recognized as a route and rendered as a child of the nearest `layout.js`.

- In the main `app` directory, `page.js` refers to the default child of `layout.js` for the root route.