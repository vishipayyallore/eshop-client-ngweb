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

> 1. Please refer [Session1.md](./Documentation/Sessions/Session1.md) and [Video](https://www.youtube.com/watch?v=wQ0Xf4pKZaQ) for more details.

---

![Information |150x150](./Documentation/Images/Information.PNG)

## What are we going to do today?

> 1. Greetings/Introduction Reel (`5 Minutes`)
> 1. Introduction of eShop Main GitHub Repository (`5 Minutes`)
> 1. PowerShell/Shell Scripts in 'Main' Repository (`5 Minutes`)
> 1. Deploy Infrastructure and Products Microservices from Main (`5 Minutes`)
> 1. Introduction to the eShop Client Application Saga (`40 Minutes`)
> 1. Review/Q & A/Panel Discussion (`5 Minutes`)
> 1. What is next in `Session 12`? (`5 Minutes`)

![Faster Your Seat Belt |150x150](./Documentation/Images/SeatBelt.PNG)

## 1. Greetings/Introduction Reel (`5 Minutes`)

> 1. Discussion and Demo

## 2. Introduction of eShop Main GitHub Repository (`5 Minutes`)

> 1. Discussion and Demo
> 1. the build pattern that we are adopting: deploy latest artifacts
> 1. discuss what to do if we are wanting to regenerate artifacts
> 1. that is, rebuild them first

## 3. PowerShell/Shell Scripts in 'Main' Repository (`5 Minutes`)

> 1. Discussion and Demo
> 1. show how we intend to add projects to eshop-main, how it is documented for reuse.
-> 1. show script itself. Run script

### Executing PowerShell Script to Pull/Get the latest code from GitHub

**Note:** Please make sure you have PowerShell 7+ installed on your machine.

```powershell
Install-Module PowerShell-yaml -Force
```

![PS Script For Get/Pull Repositories |150x150](./Documentation/Images/S1/PSScriptForRepositories.PNG)

## 4. Deploy Infrastructure and Products Microservices from Main (`5 Minutes`)

> 1. Discussion and Demo

## 5. Introduction to the eShop Client Application Saga (`40 Minutes`)

> 1. Discussion and Demo
> 1. client application in Angular (5 minutes)

        > 1. why angular? why not?

> 1. how to start a project (discuss why we are tagging everything @14.2 to ensure consistency) (5 minutes)

        > 1. ng new <project>
        > 1. indicate that this is an npm project (modify package.json as desired)

> 1. add Products component (5 minutes)

        > 1. discuss using configuration variables
        > 1. demo client

> 1. discuss routing (10 minutes)
        > 1. add product route
        > 1. add default route

> 1. demo client -showing same view from default route (10 minutes)

        > 1. add products styling

> 1. discuss production build process (5 minutes)

## 6. Review/Q & A/Panel Discussion (`5 Minutes`)

> 1. Discussion

## 7. What is next in `Session 12`? (`5 Minutes`) on `18-Nov-2022`

> 1. Greetings/Introduction Reel (`5 Minutes`)
> 1. To be done (`5 Minutes`)
> 1. Review/Q & A/Panel Discussion (`5 Minutes`)
> 1. What is next in `Session 12`? (`5 Minutes`)

---

## `***** WISH LIST - Future Sessions to be planned *****`

> 1. Dockerize the Client Application
> 1. Deploy the Client Application to Azure Kubernetes Service
> 1. GitHUB Actions for CI/CD
