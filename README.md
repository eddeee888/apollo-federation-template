# Apollo Federation Template

A repo with Router + Subgraphs + Codegen setup to understand Apollo Federation. Not intended for production usage.

## Getting Started

### Installation

```shell
yarn
```

### Start the servers

```shell
yarn serve
```

### Querying

1. Go to `http://localhost:8888`
2. Send a query. For example:

```graphql
query {
  me {
    id
    username
    watchedProducts {
      id
      name
      tag
    }
  }

  product(id: "p:2") {
    id
    name
    tag
  }
}
```

3. Follow the log in the terminal to see how it works e.g. when `__resolveReference` are called, etc.
