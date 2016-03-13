# higherr
The aim is to be able to aid students in decision making for their most relevant colleges with the help of user generated content and reviews. The initial development plan is to get the front-end built to be able to conduct user testing and collect feedback on the concept, flows and use cases which will be used for further iterations of the product.  The target audience of the platform will be students and prospective from the age of 17 – 30 years. It would be good if the look and feel is centered around the target audience and concept.  For this version of the prototype, we will be focusing only on an interface optimized for both Chrome on Desktop and Mobile. The prototype will be built based on the Material Design specs and using Angular Material for its implementation.

## GETTING STARTED
- Install neccessary development tool and environment if you haven't:
  - NodeJS: https://nodejs.org/en/
  - Then install tools: `npm install -g bower grunt`
- Pull the repository: `git clone https://github.com/SeanNguyen/higherr.git` (change the link to your current repo)
- Go to the project dir: `cd higherr`
- Install Development Dependencies: `npm install`
- Install Front-end Dependencies: `bower install`

## PREVIEW PROJECT AT LOCALHOST
- Run local server `grunt serve`
- Go to `localhost:9000`
 
## BUILD PROJECT
- Build Script `grunt build`
- The built project is now in the `/dist` folder. This is the full build include a nodeJS server, 
- If we just want the front-end part copy the whole `/dist/client` folder, this is served as static web page so you can simply copy the whole folder to your host service.
 
## CHANGE COLOR PALLETE
The color pallete is specified in the file: `/client/app/app.js`. You can see this piece of code:
```
$mdThemingProvider.definePalette('appTheme', {
       '50': '#f3fae9',
      '100': '#d2ecab',
      '200': '#bae27d',
      '300': '#9bd543',
      '400': '#8dcb2e',
      '500': '#7cb228',
      '600': '#6b9922',
      '700': '#59801d',
      '800': '#486717',
      '900': '#364e12',
      'A100': '#00C853',
      'A200': '#00C853',
      'A400': '#00C853',
      'A700': '#00C853',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 A100 A200'
    });
```
- `50`, `100`, ... `900`is the primary colors.
- `A100`...`A700` is the accent colors
- To change this get the color code and replace corresponding colors above. 
  - For example from this reference: `https://www.google.com/design/spec/style/color.html`, Red is
  ```
  50  #FFEBEE
  100 #FFCDD2
  200 #EF9A9A
  300 #E57373
  400 #EF5350
  500 #F44336
  600 #E53935
  700 #D32F2F
  800 #C62828
  900 #B71C1C
  ```
 
#### GOOD LUCK!
