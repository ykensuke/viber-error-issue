This is the sample code to report error handle issue to viber dev team.

### How to try

1. Change config in index.js.
2. Run below.

```
npm install
node index.js # Node version is v6.1.0
```

The response in my case is below.

```
============This is in unhandledRejection============
{ status: 3, status_message: 'keyboard is not valid. [numeric instance is greater than the required maximum (maximum: 6, found: 10000)]' }
```

It means the viber-bot npm package doesn't handle error.