# Tools of the Trade
### Presented at HITB2018PEK

This project is designed to demonstrate the flexibility of managing application state with a unidirectional data flow. To that end, the various view modes are all constructed from the same state object.

The compiled assets are available in the `public/` directory. These assets are comprised of plain ol' client-side files, so you can serve them up with most any webserver ([apache](https://httpd.apache.org/), [nginx](https://www.nginx.com/), [http-server](https://www.npmjs.com/package/http-server), [SimpleHTTPServer](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server#Running_a_simple_local_HTTP_server), etc. etc.).

## Keyboard shortcuts

- `arrow keys` and `page up/down` moves through slides
- `l` swaps the primary language (`en` and `zh` are available)
- `m` cycles through view modes: `slides`, `notes` (presenter view), and `print`

### A note about localStorage

My goal for this was to have the `slides` view open fullscreen on one display, and have the `notes` view open in a separate browser on the secondary display. To keep the slides in sync with my notes/presenter view, all instances running in `slides` mode will listen for external changes made to a specific localStorage key (`persist:hitb:presentation`) which contains the active slide index. There are better, more reliable ways to handle this sort of thing, but I was happy enough with the localStorage solution and felt that introducing a server component to this would be overkill.

Here's two browser windows running side by side (`slides` on the left, `notes` on the right):

![views](https://i.imgur.com/NNk7j8J.png "Slides/Notes views")

## Getting a local dev environment running

To build the assets in `public/` from source, you'll need Node.js. I'd recommend installing Node.js via [nvm](https://github.com/creationix/nvm), which is, by far, the easiest way to manage your local Node.js installation(s). I think I used v10.9.0, but anything v10.x should work fine. 

Once you have Node.js installed, set 'hitb18' as your working directory in a terminal and run the following:

```
npm install
npm start
```

If all goes well, [webpack-dev-server](https://github.com/webpack/webpack-dev-server) should build the assets in `development` mode and spin up a local webserver (default address is `http://localhost:8080`). This process should continue to run in the background; when it detects changes in the source files, it will rebuild and push changes to any connected browsers without needing to refresh the page.

When you're ready to build production assets, run `npm run build` and they will magically appear in your `public/` directory.
