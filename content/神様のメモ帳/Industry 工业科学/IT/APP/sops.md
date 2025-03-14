---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/File/Cryption
github: getsops/sops
commands:
  - sops
scoop: sops
files:
  - .sops.yaml
envvars:
  - SOPS_AGE_KEY
  - SOPS_AGE_KEY_FILE
  - SOPS_AGE_RECIPIENTS
  - SOPS_PGP_FP
  - SOPS_KMS_ARN
---

- Philosophy
    - Encryption at rest
    - Embedded DEK
    - Value-based
        - Support [[YAML]]
        - Support [[JSON]]
        - Support [[INI]]
        - Support dotenv
        - Fallback binary
    - Partial Encryption
        - Only encrypt parts of [[YAML]]/[[JSON]]

- Fundamentals
    - AES256
        - [[sops]] generates a AES256 key(aka master key, DEK) to encrypt files
        - [[sops]]  use unique DEK for each file
        - [[sops]] use unique IV for each value in a file
        - Therefore, *each value* has a *unique key*, which prevents *Known-plaintext Attack* and *Pattern Attack*
    - DEK
        - AES256 key itself will be encrypted by provided ways
            - Single key group
                - Kinds: KMS/pgp/[[age]] etc
                - You can get master key from *any* tool in key group
            - Key groups
                - data keys are *split into parts* such that keys from multiple groups are required to decrypt a file
                - SOPS goes through key groups *in order*
        - Embedded DEK
            - Encrypted AES256 key(s) will be saved in file at rest

- Configuration
    - `.sops.yaml`
        - Replace cli options
        - The `path_regex` checks the path of the encrypting file relative to the `.sops.yaml` config file
    - `$XDG_CONFIG_HOME/sops/age/keys.txt`
        - per line a [[age]] private key generated by `age-keygen`
        - Lines start with `#` will be ignored as comment
    - Con
        - NOT Support `--input-type`/`output-type`
            - [Support input/output type overrides (configuration/metadata) · Issue #813 · getsops/sops](https://github.com/getsops/sops/issues/813)
            - [New `input_type` (and `output-type`?) parameter in config file · Issue #982 · getsops/sops](https://github.com/getsops/sops/issues/982)
        - NOT Support `--output`

- Data
    - MAC
        - Use HMAC for file level integrity verification
        - `--ignore-mac` if you use partial encrytion and have modified unencrypted parts, otherwise [[sops]] throws error `MAC mismatch`
