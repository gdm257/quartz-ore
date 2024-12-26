---
tags:
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/Layer/PaaS
  - flag/Platform/Linux独占
---

## Brief

- Data
    - `/data/coolify/`

- Fundamentals
    - Reverse proxy
        - [Load-balancing | Coolify's Documentation](https://coolify.io/docs/knowledge-base/traefik/load-balancing)
        - [Multiple Servers | Coolify's Documentation](https://coolify.io/docs/knowledge-base/server/multiple-servers)
        - [Docker Compose | Coolify's Documentation](https://coolify.io/docs/knowledge-base/docker/compose)

- Con
    - Sungle node
        - [[coolify]] 本身只能是单节点
    - CPU
        - 很卡，效率还不如 [[Docker Swarm]] 手动运行
        - 本身至少需要 0.5 Core CPU，不然会卡

- Pro
    - Support Lightweight
        - ~50MB RAM in no-load
    - Support [[docker-compose]] based deployment
        - [Docker Compose | Coolify's Documentation](https://coolify.io/docs/knowledge-base/docker/compose)
    - Support Deployment policy

- Test
    - Application 部署失败
        - 哪怕是最简单的 [[docker-compose]] 都跑不起来，原因不明

- Installation
    - [Installation - Self-hosted | Coolify's Documentation](https://coolify.io/docs/installation)
    - Installer Script
        - `curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash`
    - Manually
        1. [[sshd]]
        2. [[curl]]
        3. [[Docker|Docker Engine]] 24+
        4. `/data/coolify/`
            1. Directory structure
                1. `mkdir -p /data/coolify/{source,ssh,applications,databases,backups,services,proxy,webhooks-during-maintenance}`
                2. `mkdir -p /data/coolify/ssh/{keys,mux}`
                3. `mkdir -p /data/coolify/proxy/dynamic`
            2. SSH key
                1. `ssh-keygen -f /data/coolify/ssh/keys/id.root@host.docker.internal -t ed25519 -N '' -C root@coolify`
                2. `cat /data/coolify/ssh/keys/id.root@host.docker.internal.pub >>~/.ssh/authorized_keys`
                3. `chmod 600 ~/.ssh/authorized_keys`
            3. Config templates
                1. `curl -fsSL https://cdn.coollabs.io/coolify/docker-compose.yml -o /data/coolify/source/docker-compose.yml`
                2. `curl -fsSL https://cdn.coollabs.io/coolify/docker-compose.prod.yml -o /data/coolify/source/docker-compose.prod.yml`
                3. `curl -fsSL https://cdn.coollabs.io/coolify/.env.production -o /data/coolify/source/.env`
                4. `curl -fsSL https://cdn.coollabs.io/coolify/upgrade.sh -o /data/coolify/source/upgrade.sh`
            4. Random config values
                1. `sed -i "s|APP_ID=.*|APP_ID=$(openssl rand -hex 16)|g" /data/coolify/source/.env`
                2. `sed -i "s|APP_KEY=.*|APP_KEY=base64:$(openssl rand -base64 32)|g" /data/coolify/source/.env`
                3. `sed -i "s|DB_PASSWORD=.*|DB_PASSWORD=$(openssl rand -base64 32)|g" /data/coolify/source/.env`
                4. `sed -i "s|REDIS_PASSWORD=.*|REDIS_PASSWORD=$(openssl rand -base64 32)|g" /data/coolify/source/.env`
                5. `sed -i "s|PUSHER_APP_ID=.*|PUSHER_APP_ID=$(openssl rand -hex 32)|g" /data/coolify/source/.env`
                6. `sed -i "s|PUSHER_APP_KEY=.*|PUSHER_APP_KEY=$(openssl rand -hex 32)|g" /data/coolify/source/.env`
                7. `sed -i "s|PUSHER_APP_SECRET=.*|PUSHER_APP_SECRET=$(openssl rand -hex 32)|g" /data/coolify/source/.env`
            5. Permission
                1. `chown -R 9999:root /data/coolify`
                2. `chmod -R 700 /data/coolify`
        5. Run [[coolify]] in [[Docker]]
            1. `docker network create --attachable coolify`
            2. `docker compose --env-file /data/coolify/source/.env -f /data/coolify/source/docker-compose.yml -f /data/coolify/source/docker-compose.prod.yml up -d --pull always --remove-orphans --force-recreate`
        6. Open Coolify's UI `http://<ip>:8000`

- Web
    - Server
        - Add server
        - Validate & configure server
            - 不校验则无法使用
            - 安装 [[Docker]]/[[docker-compose]]/OS etc
            - 配置并重启 [[Docker]]

## Syntax

- Configuration
    - [Docker Compose | Coolify's Docs](https://coolify.io/docs/knowledge-base/docker/compose#coolifys-magic-environment-variables)
    - [[docker-compose]]
    - `services`
        - `<service_name>`
            - `environment: List`
                - `SERVICE_<TYPE>_<ID>`
                    - dynamic environment variables
                    - Every generated variable can be reused in compose file by `${SERVICE_<TYPE>_<ID>}`
                    - TYPE
                        - `FQDN`
                        - `URL`
                        - `USER`
                        - `PASSWORD`
                        - `BASE64`
                        - `REALBASE64`
            - `volumes: List[Dict]`
                - `is_directory: bool`
                    - tell Coolify to create the directory
                - `content: str`
                    - Create a file with content
                    - Support `${ENV}` in content
            - `labels: List`
                - `coolify.managed=true`
                - `coolify.applicationId=123`
                - `coolify.type=application`
