# Env File Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| :white_check_mark: Reliability | ⚠️ Critical | 10 minutes   |

## Introduction

This analyzer confirms that a `.env` file exists for your application.

## How To Fix

To fix this issue, create a `.env` file from the `.env.example` file:

```bash
cp .env.example .env
```

Then, edit the env variables based on your application needs.

## References

- [Laravel Documentation on Environment Configuration](https://laravel.com/docs/configuration#environment-configuration)