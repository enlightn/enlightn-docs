# Installation
[[toc]]

## Requirements

Enlightn has the following requirements:

- Composer
- Laravel Framework 6.0-8.x

## Installing Enlightn

You may install Enlightn into your project using the Composer package manager:

```bash
composer require enlightn/enlightn
```

After installing Enlightn, you may publish its assets using the vendor:publish Artisan command:

```bash
php artisan vendor:publish --tag=enlightn
```

:::tip Enlightn Pro

If you are installing Enlightn Pro, you do not need to install Enlightn and you may skip the above steps as Enlightn Pro already pulls in Enlightn as a dependency for you.
:::

## Installing Enlightn Pro

Once you have purchased an Enlightn Pro license, add the `satis.laravel-enlightn.com` repository in your `composer.json` file:

```json
"repositories": [
    {
        "type": "composer",
        "url": "https://satis.laravel-enlightn.com"
    }
],
```

Next, create an `auth.json` file (if not already created) and place it either next to your `composer.json` file in your application, or in the Composer home directory. You may determine the Composer home directory on Unix machines using the following command:

```bash
composer config --list --global | grep "\[home\]"
```

Next, add the following to your `auth.json` file:

```json
{
    "http-basic": {
        "satis.laravel-enlightn.com": {
            "username": "<your Laravel Enlightn account email here>",
            "password": "<your API token here>"
        }
    }
}
```
To obtain your project API token, login on the Enlightn website and visit the [projects page](https://www.laravel-enlightn.com/projects). You can create a project and link it to any of your available (unlinked) licenses. Then, copy the project API token to your `auth.json` file as the password and your registered email as the username.

Next, install the package using the Composer `require` command:

```bash
composer require enlightn/enlightnpro
```

:::tip Package Stability

If you are not able to install Enlightn Pro into your application because of your `minimum-stability` setting, consider setting your `minimum-stability` option to `dev` and your `prefer-stable` option to `true`. This will allow you to install Enlightn Pro while still preferring stable package releases for your application.
:::

Finally, run the the vendor:publish Artisan command to publish the Enlightn Pro assets:

```bash
php artisan vendor:publish --tag=enlightnpro
```

## Enlightn Pro Code Distribution

Enlightn Pro's license does not allow the public distribution of its source code. So, you may not build an application using Enlightn Pro and distribute that application public via open source repository hosting platforms or any other code distribution platform.

If you would like to develop a third party package that augments Enlightn Pro's functionality, you are free to do so. However, you may not distribute the Enlightn Pro source code along with your package.