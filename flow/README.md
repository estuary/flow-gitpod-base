# Flow Development

Let's get you started.

This development container has the `flowctl` CLI installed and pre-configured for your use.
Your in-progress draft has been fetched to `flow.yaml`.

## Command Cheat Sheet

#### Preview your derivation

Preview applies data from your sourced collection to your work-in-progress derivation, showing you its output and any errors encountered along the way:
```
flowctl preview --source flow.yaml
```

#### Generate SQL Stubs

You can add additional transformations to a derivation using a placeholder file that doesn't exist yet, like:

```yaml
   derive:
     using:
       sqlite:
         migrations:
           - new-migration-that-does-not-exist.sql
   transforms:
     - name: fromAnvilSales
       source: acmeCo/anvil-sales
       lambda: new-lambda-that-does-not-exist.sql
```

Then ask `flowctl` to generate stubs via:
```
flowctl generate --source flow.yaml
```

#### Generate TypeScript Stubs

`flowctl` can also generate a stub TypeScript module with an interface and schemas that correspond to your sourced collections.

```yaml
   derive:
     using:
       typescript:
         module: new-module-that-does-not-exist.ts
   transforms:
     - name: fromAnvilSales
       source: acmeCo/anvil-sales
``` 

Then ask `flowctl` to generate stubs via:
```
flowctl generate --source flow.yaml
```

#### Run validations and catalog tests

```
flowctl catalog test --source flow.yaml
```

#### Publish your changes

Publishing changes will first run all validations and tests, and -- if they succeed -- will then publish your changes.

```
flowctl catalog publish --source flow.yaml
```

