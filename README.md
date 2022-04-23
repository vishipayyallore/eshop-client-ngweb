# eshop-client-ngweb
Angular UI for eshop solution

## Pre-requisites
```
npm i -g @angular/cli
```

**Note:**
> 1. Rename the colission files such as Readme.md, .gitignore

## Recipe

> 1. Create a new project inside the current folder
```
ng new eshop-client-ngweb --directory .
```

> 2. We generated/updated the .gitignore file. Such as to add A. macos, B. node, C. Angular, and D. VS Code

> 3. Migrate the test to `jest`. We need to execute the below mentioned commands.
```
npm i -D jest-preset-angular
npm i -D jest @types/jest @angular-builders/jest
npm remove karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter
rm ./karma.conf.js ./src/test.ts [Mac & Ubuntu]
rm .\karma.conf.js .\src/test.ts [Windows]
```

> 4. We have to update `tsconfig.spec.json`, and `angular.json`

> 5. 