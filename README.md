This is the sample code to report error handle issue to viber dev team.

### How to try

```
npm install
node index.js
```

The response in my case is below.

```
============This is in unhandledRejection============
{ status: 3, status_message: 'keyboard is not valid. [numeric instance is greater than the required maximum (maximum: 6, found: 10000)]' }
```

It means the viber-bot npm package doesn't handle error.