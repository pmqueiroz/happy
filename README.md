<!-- 
    Thank you for reading this
    If you´re having any problem with this project please contact in the issues session
-->

<!-- VARS -->

[license-badge]: https://img.shields.io/github/license/pmqueiroz/happy?color=%238257E5
[star-badge]: https://img.shields.io/github/stars/pmqueiroz/happy?color=8257E5&logo=github
[last-commit-badge]: https://img.shields.io/github/last-commit/pmqueiroz/proffy?color=%238257E5
[codacy-badge]: https://app.codacy.com/project/badge/Grade/b2d32fa731984f3e9c3eaa814861c9db
[nlw-badge]: https://img.shields.io/badge/NLW-building-important?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg==
[license-url]: https://github.com/pmqueiroz/happy/blob/master/LICENSE
[issues-url]: https://github.com/pmqueiroz/happy/issues/
[node-url]: https://nodejs.org/en
[yarn-url]: https://classic.yarnpkg.com/
[npm-url]:  https://www.npmjs.com/
[expo-url]: https://expo.io/

<!-- VARS -->

<div align="center">  

<img width="450px" align="center" src="https://user-images.githubusercontent.com/54639269/95743979-fca90700-0c68-11eb-911e-edf06af5c6de.png"></img>

</div>

<br>
<p align="center">
    Orphanage Finder platform made with React.js and React Native using Typescript during the<a src="https://nextlevelweek.com"> NLW (Next Level Week) #03</a>🚀
</p>



<div align="center">  
    
[![License][license-badge]][license-url]
![Git Stars][star-badge]
![NLW Stats][nlw-badge]


</div>


### Content
* [Getting Started](#Getting-Started-)
    * [Cloning](#Cloning)
    * [Requirements](#Requirements)
        * [Web](#Web)
        <!-- * [Server](#Server)
        * [Mobile](#Mobile) -->
    * [Running](#Running)
* [Issues](#Issues-)
    * [Report](#Report)
    * ~~Trouble Shooting~~
* [Contributing](#Contributing-)
* [License](#License-)

### Getting Started 🚀

#### Layout

[![Button Alternative](https://github-readme-perks.vercel.app/api/button?content=Open%20on%20Figma%20%20&logo=figma)](https://www.figma.com/file/57XTrT9eSBzyZPIvUUpixB/Happy-Web-Copy?node-id=0%3A1)

#### Cloning

```ps
# Clone the repository using git
$ git clone https://github.com/pmqueiroz/happy.git

# Access the project folder
$ cd happy
```

#### Requirements
* [Node.js][node-url]
* [Yarn][yarn-url] or [npm][npm-url]
* [Expo][expo-url]

##### Web

This project use third party dependencies that need to be installed, use that command to install all needed dependencies

```ps
$ cd web
$ yarn install
```

>The above command will install all third party dependencies used. If you want to install manually see all dependencies bellow

```json
   "dependencies": {
      "@testing-library/jest-dom": "^4.2.4",
      "@testing-library/react": "^9.3.2",
      "@testing-library/user-event": "^7.1.2",
      "@types/jest": "^24.0.0",
      "@types/node": "^12.0.0",
      "@types/react": "^16.9.0",
      "@types/react-dom": "^16.9.0",
      "leaflet": "^1.7.1",
      "react": "^16.13.1",
      "react-dom": "^16.13.1",
      "react-icons": "^3.11.0",
      "react-leaflet": "^2.7.0",
      "react-router-dom": "^5.2.0",
      "react-scripts": "3.4.3",
      "typescript": "~3.7.2"
   },
   "devDependencies": {
      "@types/react-leaflet": "^2.5.2",
      "@types/react-router-dom": "^5.1.6"
   }
```

<!-- ##### Server 

This project use third party dependencies that need to be installed, use that command to install all needed dependencies

```ps
$ cd server
$ yarn install
```

>The above command will install all third party dependencies used. If you want to install manually all the dependencies follow the steps bellow

```ps
# Entering in server directory
$ cd server

# Installing dependencies
$ yarn add @types/cors -D
$ yarn add @types/express -D
$ yarn add ts-node-dev -D
$ yarn add knex

# Proffy Version 2.0
$ yarn add pg
$ yarn add dotenv
```

##### Mobile

This projects use third party dependencies and fonts that need to be installed in development, use that command to install all needed dependencies and fonts

```ps
$ cd mobile

# Installing all fonts used
$ expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins

# Installing all dependencies required
$ yarn install
```
>The above command will install all third party dependencies and fonts used. If you want to install manually all dependencies and fonts used. follow the steps bellow

```ps
# Installing fonts used
$ expo install expo-font @expo-google-fonts/archivo
$ expo install expo-font @expo-google-fonts/poppins

# Installing dependencies required
$ yarn add @react-navigation/native
$ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
$ yarn add @react-navigation/stack
$ yarn add @react-navigation/bottom-tabs
$ yarn add axios
$ expo install @react-native-community/async-storage
``` -->

#### Running

To start the Web Server run the command

```ps
# Entering in web directory
$ cd web

# Run the web server
$ yarn start
```

<!-- To start the Back Server run the command

```ps
# Entering in Server directory
$ cd server

# Run the Back Server
$ yarn start
```

To run the mobile version run the command

```ps
# Entering in Mobile directory
$ cd mobile

# Run the Mobile Version
$ yarn start
``` -->

### Issues 🐛

#### Report

In case you are having any problem do not be shy to report to us in [Issues][issues-url] session.

### Contributing 🤝 

There are many forms to contribute with the project, first of all you can give this github repo a Star.

If you want do help with the code follow the steps bellow

```ps
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.
$ gh repo fork pmqueiroz/happy

# Clone your fork
$ git clone {your-fork-url}
$ cd happy

# Create a branch with your feature
$ git checkout -b {branch-name}

# Make the commit with your changes
$ git commit -m 'Feat: {feature-name}'

# Send the code to your remote branch
$ git push origin {branch-name}
```

Then send a Pull Request that will be analyzed and approved if it helps with the project

### License 📝
This project is under the MIT license. See the [LICENSE][license-url] for more information.