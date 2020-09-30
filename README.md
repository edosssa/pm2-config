# PM2 Config

> This package assumes you use VSCode as your editor

Accelerate your pm2 development experience with autocomplete and documentation for your JSON, YAML and Javascript pm2 configs, all from the comfort of your VSCode Editor.

## JSON

To enable JSON support simply add the following lines to your `settings.json`

```json
{
  "json.schemas": [
    {
      "fileMatch": ["/ecosystem.config.json"],
      "url": "https://raw.githubusercontent.com/edosssa/pm2-config/master/pm2config.json"
    }
  ]
}
```

## YAML

To enable YAML support, install the redhat YAML extension for vscode from [here](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml)
or run `ext install redhat.vscode-yaml`

Add the following lines to your `settings.json`:

```
{
  "yaml.schemas": {
    "https://raw.githubusercontent.com/edosssa/pm2-config/master/pm2config.json": "/ecosystem.config.yaml"
  }
}
```

## Javascript

`npm i pm2-config -D`  
`yarn add pm2-config --dev`

Then modify your `ecosystem.config.js` to match the code below:

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

> The separation of the `config` declaration and the `epxort` statatement is **intentional** and required for intellisense to work properly. Writing `module.exports = { ...your config }` does not trigger intellisense.

## License

Copyright (c) Edosa Kelvin. All rights reserved.

Licensed under the MIT license.
