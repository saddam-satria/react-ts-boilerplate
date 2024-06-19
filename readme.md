## POSQ Web App

#### Source Code Folder Structure

```
- pages -> storing presentation information to provide user interface to the client

- interfaces -> storing all types

- hooks -> storing custom function to handler state

- components -> storing web component (share component or individual component)

- datasources -> storing the intial state information, internal for internal data only, external for external data resources

- configs -> storing all configs (axios,web route,etc)
- utils -> storing the utilities information (static image url, color, etc)

- actions -> storing function to interact with in memory data (redux)

- providers -> storing actions and state for in memory data (redux)

- commons -> storing share functions

- services -> storing function to interact between views and repository

- repositories -> storing function to interact to external data

- models -> storing the blueprint of object data

- middlewares -> storing middleware function (function can run before the page renderer)
```
