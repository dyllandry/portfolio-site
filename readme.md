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

[GitHub repository](https://github.com/dyllandry/portfolio-site/).

[Live site](https://www.dylanlandry.com) as of July 22nd, 2019.

![A screen shot of Dylan Landry's portfolio
site.](portfolio-site-screenshot.jpg)

## Install
- `npm install`
- Install the [Hugo cli](https://gohugo.io/). Follow the [Hugo Getting Started article](https://gohugo.io/getting-started/installing/).

## Scripts
- `npm start`: Starts the hugo server and gulp watch task to re-inline changed javascript files located in `src/inline-scripts`.
- `npm run build`: Builds the site into the `dist` directory.
- `npm run preview`: Builds the site into the `dist` directroy and uses [http-server](https://www.npmjs.com/package/http-server) to locally host it.
