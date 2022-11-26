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

> 1. Please refer [**eshop-main**](https://github.com/vishipayyallore/eshop-main/blob/main/README.md) for the links to individual session(s) documentation and its videos for the entire series.
> 1. Please refer [**Session1**.md](./Documentation/Sessions/Session1.md) and [Video](https://www.youtube.com/watch?v=ckWZIZVDBjI) for more details.
> 1. Please refer [**Session2**.md](./Documentation/Sessions/Session2.md) and [Video](https://www.youtube.com/watch?v=-F9xI4Xu_p8) for more details.
> 1. Please refer [**Session3**.md](./Documentation/Sessions/Session3.md) and [Video](https://www.youtube.com/watch?v=-F9xI4Xu_p8) for more details.

---

![Information |150x150](./Documentation/Images/Information.PNG)

## What are we going to do today?

> 1. Greetings/Introduction Reel (`5 Minutes`)
> 1. Wrap up client configurations (`25 minutes`)
>    - Jest (`15 minutes`)
>    - Husky (`10 minutes`)
> 1. Separate design concerns (`20 minutes`)
>    - Just show how to set up a project library (`10 minutes`)
>    - Introduction to build process (`10 minutes`)
>       - Overview of build process considerations: ivy, jit/aot (`5 minutes`)
>       - Package exports (`3 minutes`)
>       - Dist folder (`2 minutes`)
> 1. Introduce `Design System` (`5 minutes`)
> 1. Review/Q & A/Panel Discussion (`5 Minutes`)
> 1. What is next in Session `14`? (`5 Minutes`)

![Faster Your Seat Belt |150x150](./Documentation/Images/SeatBelt.PNG)

## 1. Greetings/Introduction Reel (`5 Minutes`)

> 1. Discussion

## 2. Wrap up client configurations (`25 minutes`)

> 1. Discussion and Demo

### Jest (`15 minutes`)

1. prep the project for jest with a schematic:
![jest install schematic](./Documentation/Images/session13/jest%20briebug%20schematic.png)
> `ng add @briebug/jest-schematic`
currently this schematic is more hastle-free

![npm i](./Documentation/Images/session13/jest%20npm%20i.png)

2. add interop change for jest to tsconfig:

![tsconfig change](./Documentation/Images/session13/tsconfig%20change.png)

3. modulePaths: we need to configure our typescript path aliases in jest:
![preparing moduleNameMapper in jest](./Documentation/Images/session13/jest%20module%20paths.png)

> 1. Discussion and Demo
now we need to prep our tests, which we have not yet done, so they pass. afterwards, we see jest is functioning in our project:
![jest demo](./Documentation/Images/session13/jest%20it%20works.png)

### Husky (`10 minutes`)

1. install
![husky init](./Documentation/Images/session13/husky%20init.png)
> `npm husky-init && npm i`

setup husky after installing during repo initialization in the future
![add husky install to repo](./Documentation/Images/session13/husky%20add%20husky%20install%20to%20repo%20initialization.png)
> `npm set-script prepare "husky install"`

2. setup scripts:
![husky scripts init](./Documentation/Images/session13/husky%20init%20scripts.png)
> `npx husky add .husky/pre-commit`
> 
> `npx husky add .husky/pre-push`

![husky pre-commit script](./Documentation/Images/session13/husky%20pre-commit.png)
![husky pre-push script](./Documentation/Images/session13/husky%20pre-push.png)
![package.json helper](./Documentation/Images/session13/husky%20package.json%20script.png)

update scripts at the end
![update scripts](./Documentation/Images/session13/husky%20prepare%20after%20adding%20scripts.png)

> 1. Discussion and Demo
![husky demo](./Documentation/Images/session13/husky%20it%20works.png)

## 3. Separate design concerns (`20 minutes`)

> 1. Discussion and Demo

### Just show how to set up a project library (`10 minutes`)

> 1. Discussion and Demo

angular supports a monorepo design pattern, where you can have all your applications packaged together with supporting libraries such as a design system. This is in keeping with the google pattern of using monrepos.

In practice we may prefer to ensure separation of concerns, but this monorepo pattern still can be handy, for example to host a storybook of our library.

We will create a design system in a separate repo from our client.

![ng new packages](./Documentation/Images/session13/new%20library%20monorepo.png)
![new library](./Documentation/Images/session13/new%20library.png)
> `ng new <library> --create-application=false`

> `ng g library <packageName>`

### Introduction to build process (`10 minutes`)

> 1. Discussion and Demo

#### Overview of build process considerations: ivy, jit/aot (`5 minutes`)

- jit is "just in time", aot is "ahead of time"
- aot gives tighter code
- as of recent changes: 
  - aot is used for ng build and ng serve
  - jit is used for ng test
  - ivy is a recent compilation and rendering pipeline, now only option (view engine was removed in 13)

> 1. Discussion and Demo

#### Package exports (`3 minutes`)

> 1. Discussion and Demo
> 
![public api](./Documentation/Images/session13/build%20process%20-%20public%20api.png)

#### Dist folder (`2 minutes`)

> 1. Discussion and Demo
> 
![build results](./Documentation/Images/session13/what%20happens%20when%20we%20build.png)

## 4. Introduce `Design System` (`5 minutes`)

> 1. Discussion on `Design System`

A design system standardizes design for use at scale. A standard library for design reduces redundancy and ensures visual consistency.

pieces of a design system (not all of these are required!):

- page standards: color, type, etc
- element standards: menus, inputs, etc
- layout standards: 
    - targets: mobile, tablet, desktop, print
    - columns/grid

see: [design systems 101](https://www.nngroup.com/articles/design-systems-101/)

## 5. Review/Q & A/Panel Discussion (`5 Minutes`)

> 1. Discussion

## 6. What is next in Session `14`? (`5 Minutes`) on `16-Dec-2022`

> 1. Greetings/Introduction Reel (`5 Minutes`)
> 1. Introduction to Design System (`50 Minutes`)
> 1. Review/Q & A/Panel Discussion (`5 Minutes`)
> 1. What is next in Session `15`? (`5 Minutes`)

---

## `***** WISH LIST - Future Sessions to be planned *****`

> 1. Dockerize the Client Application
> 1. Deploy the Client Application to Azure Kubernetes Service
> 1. GitHUB Actions for CI/CD
