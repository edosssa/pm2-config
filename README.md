# pm2-config

Typescript declarations and Json schema for pm2 ecosystem file

## Quickstart

`npm i pm2-config -D`

Or if you prefer yarn:

`yarn add pm2-config --dev`

The next steps will be dependent on what format you would like to use for your ecosystem file. Pm2 currently supports javascript, json and yaml.

### Javascript

Simply modify your existing config or create a new file `ecosystem.config.js` to match the code below

```javascript
/**
 * @type {import('pm2-config').PM2Config}
*/
const config = {
    /* full type intellisense and documentation */
    ...your config here
}

module.exports = config
```

> The separation of the `config` declaration and the `epxort` statatement is **intentional** and required for autocomplete to work properly. Writing `module.exports = { ...config }` does not provide intellisene, perhaps this is a limitation of JSdoc or vscode itself.

### JSON and YAML

We've created json schema files to mirror the typescript declaration files so autocomplete are available for pm2 configs written in json and yaml.

To activate YAML and JSON autocomplete features, create a file `.vscode/settings.json` and paste in the following

```json
{
  "json.schemas": [
    {
      "fileMatch": ["/ecosystem.config.(json|yaml)"],
      "url": "./node_modules/pm2-coonfig/pm2Config.json"
    }
  ]
}
```

> Tip: if you create pm2 configs often you should consider isnstalling the pm2-config vscode extension (coming soon), which registers all `ecosystem.config.json` files automatically.
