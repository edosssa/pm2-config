# pm2-config

[![made in nigeria](https://img.shields.io/badge/made%20in-nigeria-008751.svg?style=for-the-badge)](https://github.com/acekyd/made-in-nigeria)

Typescript declarations and Json schema for pm2 ecosystem file

## Quickstart

### JSON and YAML

To activate YAML and JSON autocomplete features, add the following lines of json to your vscode settings.

```json
{
  "json.schemas": [
    {
      "fileMatch": ["/ecosystem.config.json"],
      "url": "https://raw.githubusercontent.com/edosssa/pm2-config/master/pm2config.json"
    }
  ],
  "yaml.schemas": {
    "https://raw.githubusercontent.com/edosssa/pm2-config/master/pm2config.json": "/ecosystem.config.yaml"
  }
}
```

And viola! ✨

If you'd like a more global solution, checkout my vscode extension (coming soon) which adds json and yaml support automatically.


### Javascript

`npm i pm2-config -D`

Or if you prefer yarn:

`yarn add pm2-config --dev`

Create a new file `ecosystem.config.js` or modify your existsing one to match the code below

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

> The separation of the `config` declaration and the `epxort` statatement is **intentional** and required for autocomplete to work properly. Writing `module.exports = { ...your config }` does not trigger autocomplete, perhaps this is a limitation of JSdoc or vscode itself.

## License

Copyright (c) Edosa Kelvin. All rights reserved.

Licensed under the MIT license.
