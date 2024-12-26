---
tags:
- flag/License/BSD
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/Plugin/Django/app/urls
github: jschneier/django-storages
pip: django-storages
---

- Idea
    - [[Django]] media files' storage backend

- Con
    - 开放协议只支持 [[SFTP]] [[FTP]] S3 libcloud

- Alternatives
    - ……没有。Django 这么大的影响力，居然连个能用的 [[WebDAV]] storage 都没有

- Dependencies
    - S3
        - `pip install boto3`

- Data
    - S3
        - [[alist]]
        - [[rclone]]
        - MinIO

- Installation
    - `pip install django-storages`
    - `settings.py:INSTALLED_APPS` - `storages`
    - Media files
        - [[Django]] 4.2+
            - `settings.py:STORAGES.default.BACKEND`
                - `storages.backends.s3.S3Storage` for Amazon S3
        - [[Django]] < 4.2
            - `DEFAULT_FILE_STORAGE`
                - `storages.backends.s3.S3Storage` for Amazon S3
    - Static files (Optional)
        - [[Django]] 4.2+
            - `STORAGES.staticfiles.BACKEND`
        - [[Django]] < 4.2
            - `STATICFILES_STORAGE`
                - `storages.backends.s3.S3Storage` for Amazon S3
    - S3 Auth
        - `AWS_S3_ACCESS_KEY_ID` or `AWS_S3_SECRET_ACCESS_KEY`
        - `AWS_ACCESS_KEY_ID` or `AWS_SECRET_ACCESS_KEY`
        - `AWS_S3_CUSTOM_DOMAIN`
        - `AWS_STORAGE_BUCKET_NAME`
        - `AWS_DEFAULT_ACL = 'public-read'`
        - `AWS_S3_REGION_NAME`
