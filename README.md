# Mytest

Simple screenshot test project.

## Setup

Run `npm install`

## Run end-to-end test and take screenshot

Run `ng e2e` 

## Compute a visual diff

run `./node_modules/blink-diff/bin/blink-diff --verbose --no-composition  --output diff.png screenshot.png screenshot2.png`

## Output

![visual diff](./diff.png)


## Implementation

Please see file `e2e/src/app-e2e-spec.ts`


## About

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

