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

:::tip Enlight Pro

If you are installing Enlightn Pro, you do not need to install Enlightn and you may skip the above steps as Enlightn Pro already pulls in Enlightn as a dependency for you.
:::

## Installing Enlightn Pro

Once you have purchased an Enlightn Pro license, you may download a release from the "releases" section of the [Enlightn website](https://www.laravel-enlightn.com). After downloading a Zip file containing the Enlightn Pro source code, you will need to install it as a Composer "path" repository within your Laravel application's composer.json file.

First, unzip the contents of the Enlightn Pro release into a `enlightnpro` directory within your application's root directory. Once you have unzipped and placed the Enlightn Pro source code within the appropriate directory, you are ready to update your composer.json file. You should add the following configuration to the file:

```json
"repositories": [
    {
        "type": "path",
        "url": "./enlightnpro"
    }
],
```

Next, add `enlightn/enlightnpro` to the require section of your composer.json file:

```json
"require": {
    "php": "^7.2.5",
    "laravel/framework": "^8.0",
    "enlightn/enlightnpro": "*"
},
```

After your `composer.json` file has been updated, run the `composer update` command in your console terminal:

```bash
composer update
```

:::tip Package Stability

If you are not able to install Enlightn Pro into your application because of your `minimum-stability` setting, consider setting your `minimum-stability` option to `dev` and your `prefer-stable` option to `true`. This will allow you to install Enlightn Pro while still preferring stable package releases for your application.
:::

Finally, run the the vendor:publish Artisan command to publish the Enlightn Pro assets:

```bash
php artisan vendor:publish --tag=enlightnpro
```

## Local Only Installation

Enlightn is meant to be used in all environments as it does not include any overhead. Unlike other packages that record queries or events, Enlightn does not include any additional processing while your application runs. The only time any analysis takes place is when you run the `enlightn` Artisan command.

To get the most out of Enlightn, we would recommend you install Enlightn in both your production and development environment. In fact, some checks are specific to your application environment. For instance, your routes should only be cached in production and should not be cached in a development environment.

Of course, if you wish to only use Enlightn to assist your local development, you may install it using the `--dev` flag for Enlightn:

```bash
composer require enlightn/enlightn --dev

php artisan vendor:publish --tag=enlightn
```

To do so for Enlightn Pro (after you have updated the `repositories` entry in your composer.json based on the Enlightn Pro installation instructions above):

```bash
composer require enlightn/enlightnpro:"*" --dev

php artisan vendor:publish --tag=enlightnpro
```

## Enlightn Pro Code Distribution

Enlightn Pro's license does not allow the public distribution of its source code. So, you may not build an application using Enlightn Pro and distribute that application public via open source repository hosting platforms or any other code distribution platform.

If you would like to develop a third party package that augments Enlightn Pro's functionality, you are free to do so. However, you may not distribute the Nova source code along with your package.