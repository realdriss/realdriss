# Introduction
- [Requirements](#requirements)
- [Installation](#installation)
- [Note](#note)

<a name="requirements"></a>
## Requirements

- Apache, nginx, or another compatible web server.
- PHP ^7.3|^8.0
- MySQL Database server
- BCMath PHP Extension
- Ctype PHP Extension
- Fileinfo PHP extension
- JSON PHP Extension
- Mbstring PHP Extension
- OpenSSL PHP Extension
- PDO PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension
- Module Re_write server
- PHP_CURL Module Enable

## PHP Configuration
Open your php configuration file php.ini and change the following settings.
```bash
memory_limit = 128M
max_execution_time = 300
```

If you are using Cpanel, you can follow this article to change your PHP memory limit settings https://chemicloud.com/kb/article/how-to-increase-the-php-memory-limit-in-cpanel/


>  {warning} On this project, we're using Laravel version 8.x. Please go to [Laravel documentation 
page](https://laravel.com/docs) for more information.

> It’s based on Laravel framework, the root folder is /public. You shouldn’t install it on a sub-folder, using sub-domain is better than sub-folder. (we won’t support installation on a sub-folder).

<a name="installation"></a>
## Install on hosting

> {warning} If you're a Laravel developer and you want to customize our source code in `platform/core` and `platform/packages`, you need to delete folder `/vendor` then run command `composer install` to reinstall vendor packages.

- Upload all files into the root folder of your hosting (normally, it is `public_html`).
- Create a database and import data from `database.sql` (it's located in  `/database`).
- Create `.env` from `.env.example` and update your database credentials.
- Make sure `APP_URL` in `.env` is your correct domain. It should be `APP_URL=http://your-domain.com`
- Go to `/admin` to access the admin panel.
- The default admin account is `a@realdriss.com` - `a.realdriss`.

## Install locally or in VPS

> {warning} If you're a Laravel developer and you want to customize our source code in `platform/core` and `platform/packages`, you need to delete folder `/vendor` then run command `composer install` to reinstall vendor packages.

- Create `.env` file from `.env-example` and update your configuration.

- Using sample data: 
    - Option 1: Import database from `database.sql`.
    - Option 2: Run `php artisan migrate --seed`
    
- Without sample data:
    - Run `php artisan migrate` to create database structure.

    - Run `php artisan cms:user:create` to create admin user.
    
    - Run `php artisan cms:theme:activate realdriss`

- If you pulled source code from GIT:
    - Run `php artisan cms:publish:assets`

- Run web locally:
    - Change `APP_URL` in `.env` to `APP_URL=http://localhost:8000`
    - Run `php artisan serve`. Open `http://localhost:8000`, you should see the homepage.
    - Go to `/admin` to access the admin panel.
    - If you're using sample data, the default admin account is `a@realdriss.com` - `realdriss`.
    - If you don't use sample data, you need to go to Admin -> Plugins then activate all plugins.