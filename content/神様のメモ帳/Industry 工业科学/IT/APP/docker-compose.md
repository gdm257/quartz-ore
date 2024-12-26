---
aliases:
  - docker compose
  - Compose V2
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - Label/Industry-工业科学/IT/APP/Plugin/Docker
  - flag/APP/DevOps/CD
docker-networks:
  - <project>_<network>
envvars:
  - PWD
  - COMPOSE_PROJECT_NAME
hosts:
  - <stack>_<service>
  - <service>
  - <container>
---

## Brief

[Compose specification | Docker Documentation](https://docs.docker.com/compose/compose-file/)

[compose-spec/spec.md at master · compose-spec/compose-spec](https://github.com/compose-spec/compose-spec/blob/master/spec.md)

[Set or change pre-defined environment variables in Docker Compose | Docker Docs](https://docs.docker.com/compose/environment-variables/envvars/)

[Compose 模板文件 - Docker — 从入门到实践](https://yeasy.gitbook.io/docker_practice/compose/compose_file)

[组合多个docker-compose文件 · 零壹軒·笔记](https://note.qidong.name/2018/11/compose-multiple-files/)

[docker/compose: Define and run multi-container applications with Docker](https://github.com/docker/compose)


- Description:
    * Compose Specification 是一种规范，定义了 compose file 的内容
    * `docker-compose.yml` 是符合 Compose Specification 的文件，即一种实现，理论上可以有其他实现，但 `docker-compose` 的实现用的人多，以致于人们快将其与 Compose Specification 等价
    * `docker-compose` 是一个 App，通过解析 `docker-compose.yml` 来调用 [[docker command]]

## Configuration

- References
    - [Compose file reference | Docker Docs](https://docs.docker.com/reference/compose-file/)

- Idea
    - A [[YAML]] file to encapsulate [[docker command|docker]] cli arguments

- Version
    - V2
        - deprecated
            - `version`
            - `services.<service>.links`
            - `services.<service>.volumes_from`
    - ~~V1 (2.x, 3.x)~~
    - [Migrate to Compose V2 | Docker Docs](https://docs.docker.com/compose/migrate/)

- API
    - `name: str`
    - `version: None|str|int|float` (deprecated)
    - `services: Dict`
        - `<service:str>: Dict`
            - `extends: Dict`
                - `file: str`
                - `service: str`
            - `container_name: str`
            - `image: str`
            - `build`
            - `depends_on: List[<service:str>]`
            - `restart: "no"|"always"|"unless-stopped"`
                - `on-failure:3` 新写法？
            - `healthcheck: Dict`
                - `test: List[<command:str>]`
                - `interval: <60s:str>`
                - `retries: int`
            - `labels: List[<<key>=<value>:str>]`
                - container labels
            - `networks: List[<network:str>]`
            - `links: List[str]`
                - e.g. `links: ["db:postgres14"]` creates host `db` indicated to host `postgres14`
            - `expose: List[int|str]`
            - `ports: List[str|Dict]`
                - e.g. `"0.0.0.0:443:443/udp"`
                - e.g.
                    - `published: 443`
                    - `target: 443`
                    - `protocol: udp`
                    - `mode: host`
            - `hostname: str`
            - `extra_hosts: List[str]`
                - e.g. `"host.docker.internal:host-gateway"`
            - `volumes: List[<volume:str>]`
            - `volumes_from: List[str]`
            - `tmpfs: List[str]`
                - NOT Support [[Docker Swarm]]
            - `read_only: bool`
            - `configs: List[<config:str>]`
            - `secrets: List[<secret:str|Dict>]`
                - `source: <secret:str>`
                - `target: <file:str>`
            - `env_file: List[<file:str>] | <file:str>`
            - `environment: Dict[<ENV:str>, <value:str>]|List[<<ENV>=<value>:str>]`
            - `user: str`
            - `user_mode: str`
            - `working_dir: str`
            - `entrypoint: List[str]`
            - `command: List[str]`
            - `tty: bool`
            - `logging: Dict`
                - `driver: "json-file"|...`
                - `options: Dict[str, str]`
                    - `<FOO>: <BAR>`
            - `privileged: bool = false`
    - `networks: None|Dict`
        - `<network:str>: None|Dict`
            - `external: bool`
            - `name: str`
            - `internal: bool`
            - `driver: str`
            - `driver_opts: Dict[str, str]`
                - `<FOO>: <BAR>`
            - `labels: List[<<label.name>=<value>:str>] | Dict[<label.name:str>, str]`
            - `attachable: bool`
            - `enable_ipv6: bool`
            - `ipam: Dict`
                - `driver: str`
                - `config: List[Dict]`
                    - `subnet: str`
                    - `ip_range: str`
                    - `gateway: str`
                    - `aux_addresses: Dict[str, str]`
                        - `<HOST>: <IP>`
                - `options: Dict[str, str]`
                    - `<FOO>: <BAR>`
            - generated network name is `<project>_<network>`
    - `volumes: None|Dict`
        - `<volume:str>: None|Dict`
            - `external: bool`
            - `name: str`
            - `driver: str`
            - `driver_opts: Dict[str, str]`
                - `<FOO>: <BAR>`
                - local
                    - `type: "bind"`
                    - `read_only: bool`
                    - `source: str`
                    - `target: str`
                    - `bind: Dict`
                        - `create_host_path: bool`
                - local
                    - `type: none`
                    - `o: bind`
                    - `device: <path:str>`
            - `labels: List[<<label.name>=<value>:str>] | Dict[<label.name:str>, str]`
            - relative path to `--project-directory`
    - `configs: None|Dict`
        - `<config:str>: Dict`
            - `content: str`
            - `file: str`
            - `external: bool`
            - `name: str`
            - mount to `/<config>`
    - `secrets: None|Dict`
        - `<secret:str>: Dict`
            - mount to `/run/secrets/<secret>`
            - `file: str`
                - load from file
            - `environment: <ENVVAR_NAME:str>`
                - load from environment virable
