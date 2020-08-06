# `server conn info`

> config for how to talk to the main app server

## Usage

```javascript
import serverUrl2, { url, port, domain, serverUrl } from "@starter-project/server-conn-info"

const serverUrl0 = url(process.env.NODE_ENV)
const serverUrl1 = url()
const serverUrl1 = serverUrl
const serverUrl1 = serverUrl2
const serverUrl2 = `http://${domain("development")}:${port("development")}`

// these are all equivalent if NODE_ENV is development
```
