# App Key Analyzer

| Category       | Severity   | Time To Fix  |
| -------------  |:----------:| ------------:|
| 🛡️ Security    | ⚠️ Critical | 1 minute     |

## Introduction

This analyzer confirms that your application key and cipher are set.

Your laravel app uses the application key for symmetric encryption and one way hashes (for SHA256 hashes only). Some use cases include:
 
1. Encryption of cookies (symmetric).
2. Signed URLs (hash).
3. Signing of serialized closures (hash).
4. Password reset tokens (hash).
5. Model data encryption (symmetric).
6. Job encryption (symmetric).
7. Session data encryption (symmetric).

## How To Fix

If your app key is not set, you may run the `key:generate` Artisan command to generate your app key:

```bash
php artisan key:generate
```

## Tip: Rotate Your App Key Regularly

It is generally considered a good practice to rotate your app key on a regular basis (e.g. every six months) or in specific situations (such as when a developer with access to the key leaves your company).

Just make sure of the following while rotating your app key:

1. Note that during key rotation, your users that are currently logged in will have their sessions invalidated (if cookies are encrypted).
2. Make sure all encrypted jobs have completed processing.
3. If you are using Eloquent's encrypted casting, make sure to decrypt (using the old app key) and then encrypt (using the new app key) your encrypted model data.
4. If you are using signed URLs, you would need to re-generate these URLs and email your users.
5. If you encrypt and decrypt anything in your application using either of the `Encrypter` class, `Crypt` facade or the `encrypt` and `decrypt` helpers, make sure to decrypt your data (using the old app key) and then encrypt (using the new app key) it back again.

You do not have to worry about password hashing, as the Laravel app key is not used for hashing passwords.

## Related Analyzers

- [Encrypted Cookies Analyzer](encrypted-cookies-analyzer.html)

## References

- [Laravel Documentation on Encryption](https://laravel.com/docs/encryption)