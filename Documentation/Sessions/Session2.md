# Session 2

## What are we going to do today?

> 1. Greetings/Introduction Reel (`5 Minutes`)
> 1. Address comments and dynamics of comments with live coding (`10 Minutes`)
> 1. Summary of DOM and bootstrap (`5 Minutes`)
> 1. Quality of life for developers (`10 Minutes`)
>    - Eslint (`5 minutes`)
>    - TypeCcript tsconfig (`5 minutes`)
> 1. Separation of environment and configuration (`20 minutes`)
>    - Angular.json File (`5 Minutes`)
>    - Environment Folder (`5 Minutes`)
>    - Config Folder (`10 Minutes`)
> 1. Review/Q & A/Panel Discussion (`5 Minutes`)
> 1. What is next in `Session 13`? (`5 Minutes`)

## 1. Greetings/Introduction Reel (`5 Minutes`)

> 1. Discussion

## 2. Address comments and dynamics of comments with live coding (`10 Minutes`)

> 1. Discussion and demo
>
- Dynamics of comments with live coding
- White theme on visual studio code shouldn’t be allowed :-)
- Angular material
- Change Detection strategy
- Ivy, you should explain JIT and AOT compilation
- Dependency Injection (DI)

## 3. Summary of DOM and bootstrap (`5 Minutes`)

> 1. Discussion and Demo

## 4. Quality of life for developers (`10 Minutes`)

> 1. Discussion and Demo

### Typescript `eslint` File (`5 minutes`)

Angular provides some eslint opinions we can install. To doo so, run this command:

```
ng add @angular-eslint/schematics
```

![eslint](../Images/session%2012/eslint.png)

observe/configure your eslint
![eslint](../Images/session%2012/eslintrc.png)

use eslint extension (vs code users)
![eslint](../Images/session%2012/eslint%20extension.png)

### Typescript `tsconfig` File (`5 minutes`)

we can configure typescript with handy things like paths, output, preferred rules. (angular build preferences can also be added here)
![typescript](../Images/session%2012/tsconfig.png)

## 5. Separation of environment and configuration (`20 minutes`)

> 1. Discussion and Demo

### angular.json File (`5 Minutes`)

you can provide different configurations in angular.json. This can be used to change local application settings such as urls.

Here, we will create an environment that will prevent calling external resources
![angular.json](../Images/session%2012/angular.json.png)

### environment Folder (`5 Minutes`)

now let's revisit the environment folder to separate configuration from environment specification.

![dev environment](../Images/session%2012/dev%20environment.png)
![prod environment](../Images/session%2012/prod%20environment.png)

we need to create the one we specified in angular.jsoon build section
![headless environment](../Images/session%2012/local%20development%20environment.png)

> 1. Discussion

### Config Folder (`10 Minutes`)

now we can implement our application settings in config.

![prod config](../Images/session%2012/prod%20config.png)

we will import these into a common config file and just reference that export throughout the project
![exported config](../Images/session%2012/exported%20config.png)

here are the other two environment configurations:
![prod config](../Images/session%2012/dev%20config.png)
![prod config](../Images/session%2012/local%20development%20config.png)

now we can consume that in the code, and the config will always be correct for the environment
![use of exported config](../Images/session%2012/use%20of%20exported%20config.png)

> 1. Discussion

## 6. Review/Q & A/Panel Discussion (`5 Minutes`)

> 1. Discussion

## 7. What is next in Session `13`? (`5 Minutes`) on `02-Dec-2022`

> 1. Greetings/Introduction Reel (`5 Minutes`)
> 1. Introduction to Design System (`50 Minutes`)
> 1. Review/Q & A/Panel Discussion (`5 Minutes`)
> 1. What is next in `Session 14`? (`5 Minutes`)
