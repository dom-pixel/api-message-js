# Api-Message

This is Api Message for use in all projects.

### Install

You can add this library as a local, per-project dependency to your project using Npm or Yarn:

```sh
Using npm
$ npm install @dom-pixel/api-message

Or Yarn
$ yarn add @dom-pixel/api-message
```

### Quick Start

```sh
  const apiMessage = (isSuccess: boolean, code: number, message: string | undefined, payload: any | undefined) =>
  {
    return {
        isSuccess,
        message
        payload,
        code
    };
  }
```
