# Dylan Landry's Portfolio Site
![A badge showing Dylan's site scored 100% on Google's Lighthouse accessibility
test.](lighthouse_test_results/lighthouse_accessibility.svg)
![A badge showing Dylan's site scored 100% on Google's Lighthouse best practices
test.](lighthouse_test_results/lighthouse_best-practices.svg)
![A badge showing Dylan's site scored 100% on Google's Lighthouse performance
test.](lighthouse_test_results/lighthouse_performance.svg)
![A badge showing Dylan's site scored 100% on Google's Lighthouse search engine optimization
test.](lighthouse_test_results/lighthouse_seo.svg)

The umpteenth iteration of Dylan's portfolio site. Made with the [Hugo static
site generator](https://gohugo.io/) 🐹.

![A screen shot of Dylan Landry's portfolio
site.](portfolio-site-screenshot.jpg)

## Install
The [Hugo cli](https://gohugo.io/) is the only dependency. Follow the [Hugo Getting Started](https://gohugo.io/getting-started/installing/) article to install it.

## Scripts
While the Hugo cli is used to build and serve the project, I included a `package.json` file so I can use npm scripts that I am more used to.
- `npm start`: Starts development server. Short for `npx hugo server`.
- `npm build`: Builds to the `public/` directory. Short for `npx hugo`.
- `npm build:serve`: Builds and serves. Short for `npx hugo && npx http-server
  public/`.
