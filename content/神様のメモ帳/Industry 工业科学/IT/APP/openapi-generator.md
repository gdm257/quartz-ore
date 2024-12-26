---
tags:
  - flag/License/Apache
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/DevOps/API
  - flag/LANGUAGE/Java
  - flag/LANGUAGE/Python
  - flag/LANGUAGE/Go
homepage: https://openapi-generator.tech
github: OpenAPITools/openapi-generator
commands:
  - openapi-generator-cli
npm: "@openapitools/openapi-generator-cli"
---

- CLI
    - `openapi-generator-cli`
        - `generate`
            - `--verbose`
            - `--log-to-stderr`
            - `--dry-run`
            - `--skip-overwrite`
            - `-c --config <file>`
            - `-i --input-spec <file_or_url>`
            - `-o --output <dir>`
            - `-g --generator-name <name>`
                - e.g. `python`
                - use name from `openapi-generator-cli list`
            - `--package-name <pkg>`
            - `--model-package <pkg>`
            - `--model-name-prefix <prefix>`
            - `--model-name-suffix <suffix>`
            - `--api-package <pkg>`
            - `--api-name-suffix <suffix>`
            - `--http-user-agent "OpenAPI-Generator/{packageVersion}/{language}"`
