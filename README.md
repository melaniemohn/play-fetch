I built this teeny app for fetching dog photos using [Create React App](https://github.com/facebook/create-react-app), primarily as a sandbox for experimenting with the React Hooks API.

### Here's a quick list of stuff that's still under construction:
- [ ] The button logic feels like a glaring issue. I needed to find a way to rerun the code that fetches a random image URL, even when the request URL hasn't changed. To do this, I added a gross, badly named boolean variable that I'm toggling back and forth to trigger another request through useEffect. I thought about updating a timestamp or something, but that just feels like another version of this quick and dirty solution. I know there's a cleaner way of handling this, but I need to dive back into the React docs to figure out what it is.
- [ ] Add some error handling! This might be a good opportunity for trying out Error Boundaries.
- [ ] I'd love an initial "loading" state to display on the first render, or whenever we don't have an image URL.
- [ ] The list of dog names in the select isn't quite as granular as the nested object we get back from that /breeds/list endpoint. Might be nice to flatten that out and expose the full breed names in the dropdown (e.g. "cardigan corgi," the cutest imaginable dog breed, instead of just "corgi").
- [ ] I hate how the button moves on the page based on the height of the image! Maybe it would look better fixed to the bottom of the window? It might also be nice to add a second button to find an image by breed, instead of firing that every time the value of the dropdown changes.

## Available Scripts

Here's the list of default scripts that come with create-react-app:

> In the project directory, you can run:
>
> #### `yarn start`
>
> Runs the app in the development mode.<br />
> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
>
> The page will reload if you make edits.<br />
> You will also see any lint errors in the console.
>
> #### `yarn test`
>
> Launches the test runner in the interactive watch mode.<br />
> See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
>
> #### `yarn build`
>
> Builds the app for production to the `build` folder.<br />
> It correctly bundles React in production mode and optimizes the build for the best performance.
>
> The build is minified and the filenames include the hashes.<br />
> Your app is ready to be deployed!
>
> See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
>
> #### `yarn eject`
>
> **Note: this is a one-way operation. Once you `eject`, you can’t go back!**
>
> If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
>
> Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
>
> You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

I've also added a script for formatting code with Prettier:

#### `yarn format`

Runs Prettier on the project for consistent code styles. You can customize these rules in the `prettier` config in `package.json`, or by adding a `.prettierrc` file. It might be nice to add this script as a pre-commit hook, but I haven't done that (yet!)


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
