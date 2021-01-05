# Env Example Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Minor | 10 minutes  |

## Introduction

This analyzer confirms that all your env variables defined in your `.env` file are also defined in your `.env.example` file.

Since `.env` files are not committed to source control, `.env.example` files are the starting point for a new project setup. This is why it is recommended that all variables be defined in your `.env.example` file.

## How To Fix

This analyzer displays the variables that are not defined in your `.env.example` file. To fix this issue, simply define these variables in the example file.

## References

- [Laravel Documentation on Environment Configuration](https://laravel.com/docs/configuration#environment-configuration)