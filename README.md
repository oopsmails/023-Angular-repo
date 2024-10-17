# Angular 18 Simple Tests

## Install Tailwind CSS with Angular

- url: https://tailwindcss.com/docs/guides/angular

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

- tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

- Add the @tailwind directives for each of Tailwind’s layers to your ./src/styles.css file.

@tailwind base;
@tailwind components;
@tailwind utilities;

- Start using Tailwind in your project
Start using Tailwind’s utility classes to style your content.

e.g,

<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>


```

## Angular Routing

https://github.com/monsterlessonsacademy/monsterlessonsacademy/tree/508-angular-routing

src\app\app.routes.ts.good.example


## TOP 6 Mistakes in RxJS code

- AngularTopRxjsMistakes

https://www.youtube.com/watch?v=OhuRvfcw3Tw

- original repo:
https://github.com/DMezhenskyi/angular-top-rxjs-mistakes/tree/ready-solution

### 🕒  Time Codes:
00:00 - Intro
00:00:54 - Project Overview;
00:02:56  - Nested Subscriptions; --> switchMap
00:05:38 - Wrong usage of takeUntil for unsub; --> takeUntil should be at the last of pipe(), or use async!
00:07:20 - Manual Subscriptions; --> toSignal()?? async
00:09:34 - Observable re-execution; --> shareReplay(1)
00:12:20 - Improper usage of distinctUntilChanged(); --> only applicable to primative types, use distinctUntilKeyChanged('userName')
00:14:46 - Brilliant Sponsorship;
00:15:54 - Side Effects in the wrong place; --> side effets in tap(), tap((trimmedConfig) => localStorage.setItem('searchConfig', JSON.stringify(trimmedConfig)))
00:17:40 - Outro;

## Pitfalls Of Using takeUntil and takeUntilDestroyed RxJS Operators

- video: https://www.youtube.com/watch?v=eJs4EJUOnNE

There is an eslint rule that helps to avoid the pitfalls I mentioned - https://github.com/cartant/rxjs-tslint-rules#rxjs-no-unsafe-takeuntil

- toSignal()

00:06:52 - The best way to handle unsubscriptions;

## RxJS Scan Operator - How to Manage the State

- video: https://www.youtube.com/watch?v=PDpAjf0688Y

- scan

The *scan* operator in RxJS (Reactive Extensions for JavaScript) is a powerful tool that allows you to accumulate state over time. It is somewhat analogous to the reduce function in JavaScript arrays but is used within the context of Observables.

## NgRx Signals Store - Is It a NgRx Replacement?

- video: https://www.youtube.com/watch?v=VPyra_5Ko-4
- Learn NgRx signals store which is a new library from NgRx family. It simplifies working with signals and organizes them in efficient manner introducing new rules to the code.

- Notes: for Angular 18

Use `npm i @ngrx/signals@next`, not `npm install @ngrx/signals --save`, as of 20240703

Will add following in package.json,

`"@ngrx/signals": "^18.0.0-rc.2",`

## Error Log:

### Cannot find /public/*.svg

- This could be a temporary bug from Aangular v18.04
- Solution:

https://stackoverflow.com/questions/78526073/what-is-the-proper-way-to-reference-assets-in-the-new-angular-18-public-folder

1. ok, but cannot solve favicon.ico
solution to image in angular 18:

in angular 18 version there is not "assets" folder. if you want to put in your project images, you put the images in the "public" folder and not in the assets folder and you will write in the src of the img the name of the image without any routing.

2. preferred solution:

Me too, I initially had only the /public folder (no /assets folder created by "ng new project-name", Angular CLI 18.0.2), and couldn't load images from /public.

I had to create the "assets" folder myself under "public": /public/assets (and I placed my image here).

Then, `<img src="/assets/test.png">` worked.

