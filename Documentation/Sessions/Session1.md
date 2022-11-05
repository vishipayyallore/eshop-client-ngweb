# Session 1

## What are we going to do today?

> 1. Greetings/Introduction Reel (`5 Minutes`)
> 1. Introduction of eShop Main GitHub Repository (`5 Minutes`)
> 1. PowerShell/Shell Scripts in 'Main' Repository (`5 Minutes`)
> 1. Deploy Infrastructure and Products Microservices from Main (`5 Minutes`)
> 1. Introduction to the eShop Client Application Saga (`40 Minutes`)
> 1. Review/Q & A/Panel Discussion (`5 Minutes`)
> 1. What is next in `Session 12`? (`5 Minutes`)

## 1. Greetings/Introduction Reel (`5 Minutes`)

> 1. Discussion and Demo

## 2. Introduction of eShop Main GitHub Repository (`5 Minutes`)

> 1. Discussion and Demo

### Parent Folder for all Microservices

![Parent Folder for all Microservices |150x150](../Images/S1/ParentFolderMicroservices.PNG)

### eShop Main Folder

![eShop Main Folder |150x150](../Images/S1/eShopMainFolder.PNG)

## 3. PowerShell/Shell Scripts in 'Main' Repository (`5 Minutes`)

> 1. Discussion and Demo

### Executing Shell Script to Pull/Get the latest code from GitHub

![Shell Script For Get/Pull Repositories |150x150](../Images/S1/ShellScriptForRepositories.PNG)

### Executing PowerShell Script to Pull/Get the latest code from GitHub

**Note:** Please make sure you have PowerShell 7+ installed on your machine.

```powershell
Install-Module PowerShell-yaml -Force
```

![PowerShell Script For Get/Pull Repositories |150x150](../Images/S1/PSScriptForRepositories.PNG)

## 4. Deploy Infrastructure and Products Microservices from Main (`5 Minutes`)

> 1. Discussion and Demo

### Deploy Entire Solution

![Deploy Entire Solution |150x150](../Images/S1/DeployEntireSolution.PNG)

## 5. Introduction to the eShop Client Application Saga (`40 Minutes`)

> 1. Discussion and Demo

### Client application in Angular (`5 minutes`)

> 1. Discussion
> 1. Why Angular? Why not?

### How to start a project (`5 minutes`)

> 1. Demo and Discussion
> 2. Discuss why we are using @14.2
> 3. Start an new angular project
![ng new screenshot](../Images/S1/NgNew.PNG)
> 4. Installed versions - node, angular/cli
> 5. `ng new` to create a new project
> 6. Indicate that this is an npm project (modify package.json as desired)
![package.json screenshot](../Images/S1/PackageJson.PNG)

### Discuss Configuration (`5 minutes`)

> 1. Angular configuration variables
![configuration screenshot](../Images/S1/Configuration.PNG)
> 2. Expose `process.env` and _angular's environment_ inside the component
![show environment with changes to ts](../Images/S1/ShowEnvironmentTS.PNG)
> 3. Render `process.env` and _angular's environment_ inside the template
![show environment with changes to html](../Images/S1/ShowEnvironmentHtml.PNG)
> 4. Viewing `process.env` and angular's environment in Browser
![show environment rendered in browser](../Images/S1/ShowEnvironmentPage.PNG)

### Add Products component (`5 minutes`)

> 1. Setup products component
![products component ts](../Images/S1/ProductsComponentTs.PNG)
> 2. Setup products component template using `async pipe`
![products html](../Images/S1/ProductsComponentHtml.PNG)
> 3. Provide products to render in component
![products service](../Images/S1/ProductsServiceBasicConcept.PNG)
> 4. Support `HttpClient` from app module
![add HttpClient](../Images/S1/AppModuleHttpClient.PNG)
> 5. Create `product` Module
![add HttpClient](../Images/S1/CreateProductModule.PNG)

### Discuss `routing` (10 minutes)

> 1. Add `product` route
> 2. Add `default` route
![routing screenshot](../Images/S1/AppRoutingModule.PNG)
> 3. Add router outlet
![router outlet](../Images/S1/RouterOutlet.PNG)
> 4. Setup lazy-loading of products module
![lazy-loaded products](../Images/S1/ProductsModuleChanges.PNG)
![products child routes](../Images/S1/ProductsRoutingModule.PNG)
> 5. Demo `Client Application` in Browser
> ![products raw json demo](../Images/S1/DemoProducts.PNG)

### Make `products` look more like `products` (10 minutes)

> 1. Add product component
![create scaffolding with cli](../Images/S1/CreateProductWithCli.PNG)
![product component](../Images/S1/CreateProductComponent.PNG)
![product template](../Images/S1/CreateProductTemplate.PNG)
> 2. Add `product` styling
![product styling](../Images/S1/StyleProduct.PNG)
> 3. Add `product` component to `products` module
![add to module](../Images/S1/AddProductToProductsModule.PNG)
![add to template](../Images/S1/AddProductComponentToProductsTemplate.PNG)
> 4. Demo `products` page in Browser
![demo styled products](../Images/S1/DemoStyledProducts.PNG)

### Discuss production build process (5 minutes)

> 1. Discussion and Demo

## 6. Review/Q & A/Panel Discussion (`5 Minutes`)

> 1. Discussion

## 7. What is next in `Session 12`? (`5 Minutes`) on `18-Nov-2022`

> 1. Greetings/Introduction Reel (`5 Minutes`)
> 1. Deep Dive into Configuring the Angular Project for Development (`50 Minutes`)
> 1. Review/Q & A/Panel Discussion (`5 Minutes`)
> 1. What is next in `Session 12`? (`5 Minutes`)
