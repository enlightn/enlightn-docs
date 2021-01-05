# Env Variable Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | Major | 10 minutes  |

## Introduction

This analyzer confirms that all your env variables defined in your `.env.example` file are also defined in your `.env` file.

In case there are some missing variables, you may have forgotten to define them in your `.env` file. If you excluded these variables to set them as null, you can do this in your definition as well:

```ini
YOUR_VARIABLE=null
```

## How To Fix

This analyzer displays the variables that are not defined in your `.env` file. To fix this issue, simply define these variables in the file.

## References

- [Laravel Documentation on Environment Configuration](https://laravel.com/docs/configuration#environment-configuration)