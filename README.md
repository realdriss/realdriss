# RealDriss

Create, list and exchange value effortlessly.

## About us

A decentralized marketplace utilizing peer liquidity to provide a safer, faster and scalable platform for buyers and sellers to create, list and exchange value effortlessly.

## Features

- Coding Standard: All code follow coding standards PSR-12 and best practices.
- Fully Responsive: Compatible with all screen resolutions.
- Powerful Permission System: Manage user, team, role by permissions. Easy to manage user by permissions.
- Page, blog, menu, contact modules are provided with the use of components to avoid boilerplate code.
- A vast number of jQuery components are provided, which helps you save time.
- Admin template comes with color schemes to match your taste.
- Dashboard with Google Analytics, recent posts, error logs.
- Roles and Permissions.
- CRUD/theme Generator.
- Powerful Media Management.
- Menu drag & drop Management.
- Widgets system.
- Theme options. Easy to change theme config from the admin panel.
- Plugin system, able to extend features by adding plugins.

        "realdriss/menu": "dev-main",
        "realdriss/page": "dev-main",
        "realdriss/platform": "dev-main",
        "realdriss/plugin-management": "dev-main",
        "realdriss/shortcode": "dev-main",
        "realdriss/theme": "dev-main",

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


## Installation steps

1.Run -> git clone <https://github.com/realdriss/realdriss.git>
2.Run -> a. composer install --prefer-source
3.Configure the .env file
4.Create an empty db - realdriss
5.Run -> php artisan migrate --seed
6.Run -> php artisan vendor:publish --tag=cms-public --force
7.Run -> php artisan cms:theme:assets:publish
