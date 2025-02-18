# Namaste React 



# Parcel
- Dev Build
- Local Server
- HMR(Hot Module Replacement)
When we save our change, automatically server is refreshed with new changes)
- File Watching Algorithm - written in c++
- Caching - Faster Builds
- Caching - Faster Builds
(It caches our changes , so if we make a change , the next build doesn't take much time)
- Image Optimization
(Image loading is most expensive operation in our website , and parcel does optimization of the operation.)
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPS mode
- Tree Shaking - remove unused code
- Different dev and prod bundle


# Namaste Food

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - Restaurant Container
 *  - RestaurantCard
 *    - Img
 *    - Name of Restaurant,star rating , cuisine,delivery time ,etc
 * Footer
 * - CopyRight
 * - Contact
 * -Links
 * - Address
 */

 # React Hooks
 - Normal JS Utility functions
 - useState() - Superpowerful state variables in react
 - useEffect()

 # 2 types of Routing in web apps
 - Client side Routing
 - Server Side routing


 # Redux Toolkit
 - Install @reduxjs/toolkit and react-redux
 - Build our own store
 - Connect our store to our app
 - Slice (cartSlice)
 - dispatch(action)
 - Selector

 # Types of testing (developer)
 - Unit testing
 - Integration testing
 - End to End testing (e2e testing)

 # Settign up Testing in our app
- Install React Testing Library (from react testing library website)
- Install Jest (from jest website)
- Installed Babel dependencies (from jest website)
- Configure Babel (from jest website)
- Configure Parcel Config file to disable babel  transpilation (from parcel website)
- Jest configuration
- Install jsdom library (react testing library website)
- Install @babel/preset-react to make JSX work in test cases. 
- Include @babel/preset-react inside my babel config file.
- Install npm i -D @testing-library/jest-dom 

# Deployment

- Signup on AWS
- Launch Instance
- chmod 400 <secret>.pem ( do on git bash)
- connect to virtual machine using "ssh -i "FoodOrderingApp-secret.pem" ubuntu@ec2-13-232-133-75.ap-south-1.compute.amazonaws.com" command

- Install node version 20.12.2 (same as local node version, otherwise errors will come)
- Git clone https://github.com/lioneltarun10/namaste-react1.git
- Frontend STEPS
  - npm install  -> installs the dependencies
  - npm run build
  - sudo apt update
  - sudo apt install nginx
  - sudo systemctl start nginx
  - sudo systemctl enable nginx
  - copy code from dist(build files) to /var/www/html/
  - sudo scp -r dist/* /var/www/html/
  - enable port :80 of your instamce