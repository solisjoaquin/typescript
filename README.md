# Notes of the course of TS on ui.dev

i'll be adding comments of the course and pasting paragraphs with important data for my notes.

Commands 

## install TS with npm

```
npm install -g typescript
```

If we’ve installed TypeScript locally in our project, we can also run that version using npx

```
npx tsc
```

### create tsconfing.json

TSC is the TypeScript command line tool. We run this to type check and compile our code into JavaScript. If we have a tsconfig.json file in our project directory, tsc will pick up all of the configuration options we used in that file. We can override those options using command line flags. During this course, we’ll assume that all of our TypeScript code has an accompanying tsconfig.json file, which means all we need to do to run TypeScript is run tsc with no options.


```
tsc --init
```

