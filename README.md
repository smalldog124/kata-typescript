# KATA-TS
# โจทย์
```
"1plus2plus3plus4" --> "10"
"1plus2plus3minus4" --> "2"
```

# init project

## init package
```
$ npm init
```

## install typescript
```
$ npm install -s typescript
```

## install jest cli
```
$ npm install --save-dev jest-cli @types/jest
```

## install jest
```
$ npm install -d ts-jest
```

## init tsconfig
```
add tsc infile package.json
{
    ...
    "scripts": {
    "test": "jest",
    "tsc": "tsc"
    },
    ...
}

generate file tsconfig.json
$ npm run tsc -- --init

uncomment and set path file tsconfig.json

    "outDir": "./dist",
    "rootDir": "./src",
```

## config jest ให้ใช้กับ typscrip

```
    ...
    "jest": {
    "roots": [
      "<rootDir>/src"
    ],
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js"
    ]
  },
  ....
```

# Test

```
    npm test
```
