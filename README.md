# eShop Client Application

Angular 14.x UI for eShop Client application

## Status Badges

| PR, and CI Builds | Code QL |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| To be done | To be done |

## Pre-Requisites

> 1. Windows 10 / Ubuntu 20.04 / Mac OS 12.3 (build 21E230)
> 1. NPM
> 1. Angular CLI
> 1. VS Code (<https://code.visualstudio.com/>)
> 1. Docker Desktop (<https://docs.docker.com/docker-for-windows/install/>)
> 1. PowerShell 7+

---

## Links to individual session(s) Documentation and its Videos

**Note:**: The links below are to the individual session(s) documentation and its videos.

> 1. Please refer [**eshop-main**](https://github.com/vishipayyallore/eshop-main/blob/main/README.md) for the links to individual session(s) documentation and its videos for this entire series.
> 1. Please refer [**Session1**.md](./Documentation/Sessions/Session1.md) and [Video](https://www.youtube.com/watch?v=ckWZIZVDBjI) for more details.
> 1. Please refer [**Session2**.md](./Documentation/Sessions/Session2.md) and [Video](https://www.youtube.com/watch?v=-F9xI4Xu_p8) for more details.

---

![Information |150x150](./Documentation/Images/Information.PNG)

## What are we going to do today?

> 1. Greetings/Introduction Reel (`5 Minutes`)
> 1. Address comments and dynamics of comments with live coding (`10 Minutes`)
> 1. Summary of DOM and bootstrap (`5 Minutes`)
> 1. Quality of life for developers (`10 Minutes`)
>    - eslint (`5 minutes`)
>    - typescript tsconfig (`5 minutes`)
> 1. Separation of environment and configuration (`20 minutes`)
>    - angular.json File (`5 Minutes`)
>    - environment Folder (`5 Minutes`)
>    - Config Folder (`10 Minutes`)
> 1. Review/Q & A/Panel Discussion (`5 Minutes`)
> 1. What is next in `Session 13`? (`5 Minutes`)

![Faster Your Seat Belt |150x150](./Documentation/Images/SeatBelt.PNG)

## 1. Greetings/Introduction Reel (`5 Minutes`)

> 1. Discussion

## 2. Address comments and dynamics of comments with live coding (`10 Minutes`)

> 1. Discussion and demo
>
- dynamics of comments with live coding
- white theme on visual studio code shouldn’t be allowed :-)
- angular material
- change detection strategy
- ivy, you should explain JIT and AOT compilation
- dependency injection

## 3. Summary of DOM and bootstrap (`5 Minutes`)

> 1. Discussion and Demo

## 4. Quality of life for developers (`10 Minutes`)

> 1. Discussion and Demo

### Typescript `eslint` File (`5 minutes`)

Angular provides some eslint opinions we can install. To doo so, run this command:

```
ng add @angular-eslint/schematics
```

![eslint](./Documentation/Images/session%2012/eslint.png)

observe/configure your eslint
![eslint](./Documentation/Images/session%2012/eslintrc.png)

use eslint extension (vs code users)
![eslint](./Documentation/Images/session%2012/eslint%20extension.png)

### Typescript `tsconfig` File (`5 minutes`)

we can configure typescript with handy things like paths, output, preferred rules. (angular build preferences can also be added here)
![typescript](./Documentation/Images/session%2012/tsconfig.png)

## 5. Separation of environment and configuration (`20 minutes`)

> 1. Discussion and Demo

### angular.json File (`5 Minutes`)

you can provide different configurations in angular.json. This can be used to change local application settings such as urls.

Here, we will create an environment that will prevent calling external resources
![angular.json](./Documentation/Images/session%2012/angular.json.png)

### environment Folder (`5 Minutes`)

now let's revisit the environment folder to separate configuration from environment specification.

![dev environment](./Documentation/Images/session%2012/dev%20environment.png)
![prod environment](./Documentation/Images/session%2012/prod%20environment.png)

we need to create the one we specified in angular.jsoon build section
![headless environment](./Documentation/Images/session%2012/local%20development%20environment.png)

> 1. Discussion

### Config Folder (`10 Minutes`)

now we can implement our application settings in config.

![prod config](./Documentation/Images/session%2012/prod%20config.png)

we will import these into a common config file and just reference that export throughout the project
![exported config](./Documentation/Images/session%2012/exported%20config.png)

here are the other two environment configurations:
![prod config](./Documentation/Images/session%2012/dev%20config.png)
![prod config](./Documentation/Images/session%2012/local%20development%20config.png)

now we can consume that in the code, and the config will always be correct for the environment
![use of exported config](./Documentation/Images/session%2012/use%20of%20exported%20config.png)

> 1. Discussion

## 6. Review/Q & A/Panel Discussion (`5 Minutes`)

> 1. Discussion

## 7. What is next in `Session 13`? (`5 Minutes`) on `02-Dec-2022`

> 1. Greetings/Introduction Reel (`5 Minutes`)
> 1. Introduction to Design System (`50 Minutes`)
> 1. Review/Q & A/Panel Discussion (`5 Minutes`)
> 1. What is next in `Session 14`? (`5 Minutes`)

---

## `***** WISH LIST - Future Sessions to be planned *****`

> 1. Dockerize the Client Application
> 1. Deploy the Client Application to Azure Kubernetes Service
> 1. GitHUB Actions for CI/CD
