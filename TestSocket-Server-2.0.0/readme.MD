# TestSocket Server

Socket.io 2.0 is used because the latest Socket.io UE plugin that uses later version of Socket.io causes errors while packaging for Android.

* index.js is used for testing Android app.
* Socket.io acknowledgement unfortunately is not supported by Socket.io UE plugin at present.

## Setup and Run

Install dependencies:
```
> npm install
```

Run test server:
```
> node index.js
```

## Send a touch/click

```
curl -X POST -H "Content-Type: application/json" -d "{\"event\": \"ServerCmd\",\"cmd\":{\"cmd\": \"tap\",\"x\": 1200,\"y\": 720}}" http://localhost:3000/event
```
