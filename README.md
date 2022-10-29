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

### Parent Folder for all Microservices

![Parent Folder for all Microservices |150x150](./Documentation/Images/S1/ParentFolderMicroservices.PNG)

### eShop Main Folder

![eShop Main Folder |150x150](./Documentation/Images/S1/eShopMainFolder.PNG)

## 3. PowerShell/Shell Scripts in 'Main' Repository (`5 Minutes`)

> 1. Discussion and Demo

### Executing Shell Script to Pull/Get the latest code from GitHub

![Shell Script For Get/Pull Repositories |150x150](./Documentation/Images/S1/ShellScriptForRepositories.PNG)

### Executing PowerShell Script to Pull/Get the latest code from GitHub

**Note:** Please make sure you have PowerShell 7+ installed on your machine.

```powershell
Install-Module PowerShell-yaml -Force
```

![PowerShell Script For Get/Pull Repositories |150x150](./Documentation/Images/S1/PSScriptForRepositories.PNG)

## 4. Deploy Infrastructure and Products Microservices from Main (`5 Minutes`)

> 1. Discussion and Demo

### Deploy Entire Solution

![Deploy Entire Solution |150x150](./Documentation/Images/S1/DeployEntireSolution.PNG)

## 5. Introduction to the eShop Client Application Saga (`40 Minutes`)

> 1. Discussion and Demo

### Client application in Angular (`5 minutes`)

> 1. Discussion
> 1. Why Angular? Why not?

### How to start a project (`5 minutes`)

> 1. Demo and Discussion
> 2. Discuss why we are using @14.2
> 3. Start an new angular project
![ng new screenshot](./Documentation/Images/S1/NgNew.PNG)
> 4. Installed versions - node, angular/cli
> 5. `ng new` to create a new project
> 6. Indicate that this is an npm project (modify package.json as desired)
![package.json screenshot](./Documentation/Images/S1/PackageJson.PNG)

### Discuss Configuration (`5 minutes`)

> 1. Angular configuration variables
![configuration screenshot](./Documentation/Images/S1/Configuration.PNG)
> 2. Expose `process.env` and _angular's environment_ inside the component
![show environment with changes to ts](./Documentation/Images/S1/Show_Environment_TS.PNG)
> 3. Render `process.env` and _angular's environment_ inside the template
![show environment with changes to html](./Documentation/Images/S1/Show_Environment_Html.PNG)
> 4. Viewing `process.env` and angular's environment in Browser
![show environment rendered in browser](./Documentation/Images/S1/Show_Environment_Page.PNG)

### Add Products component (`5 minutes`)

> 1. Setup products component
![products component ts](./Documentation/Images/S1/ProductsComponentTs.PNG)
> 2. Setup products component template using `async pipe`
![products html](./Documentation/Images/S1/ProductsComponentHtml.PNG)
> 3. Provide products to render in component
![products service](./Documentation/Images/S1/Products_Service_Basic_Concept.PNG)
> 4. Support `HttpClient` from app module
![add HttpClient](./Documentation/Images/S1/AppModuleHttpClient.PNG)
> 5. Create `product` Module
![add HttpClient](./Documentation/Images/S1/CreateProductModule.PNG)

### Discuss `routing` (10 minutes)

> 1. Add `product` route
> 2. Add `default` route
![routing screenshot](./Documentation/Images/S1/AppRoutingModule.PNG)
> 3. Add router outlet
![router outlet](./Documentation/Images/S1/RouterOutlet.PNG)
> 4. Setup lazy-loading of products module
![lazy-loaded products](./Documentation/Images/S1/ProductsModuleChanges.PNG)
![products child routes](./Documentation/Images/S1/ProductsRoutingModule.PNG)
> 5. Demo `Client Application` in Browser
> ![products raw json demo](./Documentation/Images/S1/DemoProducts.PNG)

### Make `products` look more like `products` (10 minutes)

> 1. Add product component
![create scaffolding with cli](./Documentation/Images/S1/CreateProductWithCli.PNG)
![product component](./Documentation/Images/S1/CreateProductComponent.PNG)
![product template](./Documentation/Images/S1/CreateProductTemplate.PNG)
> 2. Add `product` styling
![product styling](./Documentation/Images/S1/StyleProduct.PNG)
> 3. Add `product` component to `products` module
![add to module](./Documentation/Images/S1/AddProductToProductsModule.PNG)
![add to template](./Documentation/Images/S1/AddProductComponentToProductsTemplate.PNG)
> 4. Demo `products` page in Browser
![demo styled products](./Documentation/Images/S1/DemoStyledProducts.PNG)

### Discuss production build process (5 minutes)

> 1. Discussion and Demo

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
