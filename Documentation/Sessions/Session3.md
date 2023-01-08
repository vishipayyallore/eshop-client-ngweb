# Session 3

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

## 1. Greetings/Introduction Reel (`5 Minutes`)

> 1. Discussion and Demo

## 2. Wrap up client configurations (`25 minutes`)

> 1. Discussion and Demo

### Jest (`15 minutes`)

#### 1. Prep the project for jest with a schematic

![jest install schematic](../Images/session13/jest%20briebug%20schematic.png)

> `ng add @briebug/jest-schematic`
currently this schematic is more hastle-free

![npm i](../Images/session13/jest%20npm%20i.png)

#### 2. Add interop change for jest to tsconfig

![tsconfig change](../Images/session13/tsconfig%20change.png)

#### 3. ModulePaths: we need to configure our typescript path aliases in jest

![preparing moduleNameMapper in jest](../Images/session13/jest%20module%20paths.png)

#### 4. Jest Discussion and Demo

now we need to prep our tests, which we have not yet done, so they pass. afterwards, we see jest is functioning in our project:
![jest demo](../Images/session13/jest%20it%20works.png)

### Husky (`10 minutes`)

#### 1. Install husky

![husky init](../Images/session13/husky%20init.png)

> `npm husky-init && npm i`

setup husky after installing during repo initialization in the future
![add husky install to repo](../Images/session13/husky%20add%20husky%20install%20to%20repo%20initialization.png)
> `npm set-script prepare "husky install"`

#### 2. Setup Scripts

![husky scripts init](../Images/session13/husky%20init%20scripts.png)

> `npx husky add .husky/pre-commit`
> `npx husky add .husky/pre-push`

![husky pre-commit script](../Images/session13/husky%20pre-commit.png)
![husky pre-push script](../Images/session13/husky%20pre-push.png)
![package.json helper](../Images/session13/husky%20package.json%20script.png)

#### 3. Update scripts at the end

![update scripts](../Images/session13/husky%20prepare%20after%20adding%20scripts.png)

#### 4. Husky Discussion and Demo

![husky demo](../Images/session13/husky%20it%20works.png)

## 3. Separate design concerns (`20 minutes`)

> 1. Discussion and Demo

### Just show how to set up a project library (`10 minutes`)

> 1. Discussion and Demo

angular supports a monorepo design pattern, where you can have all your applications packaged together with supporting libraries such as a design system. This is in keeping with the google pattern of using monrepos.

In practice we may prefer to ensure separation of concerns, but this monorepo pattern still can be handy, for example to host a storybook of our library.

We will create a design system in a separate repo from our client.

![ng new packages](../Images/session13/new%20library%20monorepo.png)
![new library](../Images/session13/new%20library.png)
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

![public api](../Images/session13/build%20process%20-%20public%20api.png)

#### Dist folder (`2 minutes`)

> 1. Discussion and Demo

![build results](../Images/session13/what%20happens%20when%20we%20build.png)

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

## 6. What is next in `Session 14`? (`5 Minutes`) on `20-Jan-2023`

> 1. Greetings/Introduction Reel (`5 Minutes`)
> 1. Introduction to Design System (`50 Minutes`)
> 1. Review/Q & A/Panel Discussion (`5 Minutes`)
> 1. What is next in `Session 14`? (`5 Minutes`)
