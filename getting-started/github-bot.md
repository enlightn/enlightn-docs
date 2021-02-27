---
image: https://cdn.laravel-enlightn.com/images/github_bot.png
---

# Github Bot Integration
[[toc]]

## The Enlightn Github Bot

Enlightn has a Github Bot that can do the following:
- Compile a report for every pull request highlighting the failed checks.
- Add review comments on the pull request diff on the lines of code that introduce new issues.

Here's how the compiled report looks like for every pull request or push to a pull request:

<img :src="$withBase('/images/github_report.png')" alt="Enlightn Github Bot Report" />

Here's how the review comments look like for Github pull requests:

<img :src="$withBase('/images/github_bot.png')" alt="Enlightn Github Bot Review Comments" />

## Who Can Install

- **Public Repositories:** Anyone can install the Github bot for public / open source repositories.
- **Private Repositories:** Only Enlightn Pro users can install the Github bot on private repositories.

## Installation Steps

1. First, make sure that you have Enlightn version 1.16.0 (or higher) or Enlightn Pro version 1.11.0 (or higher) installed.
2. If you haven't already, [signup on the Enlightn website](https://www.laravel-enlightn.com/register).
3. Next, visit the [Repositories section](https://www.laravel-enlightn.com/repositories) on the Enlightn website and click on the "**Add Github Repositories**" button. This will redirect to a Github page, where you can choose which repositories you would like to install the Enlightn Github bot on.
4. After installation of the Github app, you should see your installed repositories in the [Repositories section](https://www.laravel-enlightn.com/repositories). In case you don't see the new installed repositories immediately, you may need to give it a refresh after a few seconds.
5. Next, integrate Enlightn as a Github action as described [here](usage.html#usage-in-ci-environments).
6. Next, add your Enlightn credentials and Github repository name in your `config/enlightn.php` and `.env` files respectively. Your username is the email you used to register on Enlightn. The API token can be found on the [profile section](https://www.laravel-enlightn.com/user/profile) of the website after logging in.

```php
/*
|--------------------------------------------------------------------------
| Credentials
|--------------------------------------------------------------------------
|
| The following credentials are used to share your Enlightn report with
| the Enlightn Github Bot. This allows the bot to compile the report
| and add review comments on your pull requests.
|
*/
'credentials' => [
    'username' => env('ENLIGHTN_USERNAME'),
    'api_token' => env('ENLIGHTN_API_TOKEN'),
],

// Set this value to your Github repo for integrating with the Enlightn Github Bot
// Format: "myorg/myrepo" like "laravel/framework".
'github_repo' => env('ENLIGHTN_GITHUB_REPO'),
```

In your `.env` file:
```ini
ENLIGHTN_USERNAME=your@email.com
ENLIGHTN_API_TOKEN=<your api token here>
ENLIGHTN_GITHUB_REPO=your/repo
```

7. Next, modify your Enlightn CI step in your Github action as follows:

```yaml
- name: Run Enlightn Checks and Trigger the Enlightn Bot
  if: ${{ github.event_name == 'pull_request' }}
  env:
    ENLIGHTN_USERNAME: ${{ secrets.ENLIGHTN_USERNAME }}
    ENLIGHTN_API_TOKEN: ${{ secrets.ENLIGHTN_API_TOKEN }}
    ENLIGHTN_GITHUB_REPO: ${{ github.repository }}
  run: |
    cp .env.example .env
    php artisan enlightn --ci --report --review --issue=${{ github.event.number }}
```

If you don't want the Enlightn Bot to add review comments on the pull request, simply exclude the `--review` flag above.

8. Finally, add your `ENLIGHTN_USERNAME` and `ENLIGHTN_API_TOKEN` [secrets to your Github repository or organization](https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository) if you haven't already.

After the above steps, you're all set. On your next pull request, the Enlightn Github bot will be available to "review" and comment on your pull requests. How cool is that! :sunglasses:

## Steps to Uninstall

If you want to uninstall the Enlightn Github bot from some of your repositories, just visit the [Repositories section](https://www.laravel-enlightn.com/repositories) on the Enlightn website and click on the "**Add Github Repositories**" button. This will take you to a Github page where you will see the option to configure the Enlightn Github app on your organizations. Click on the relevant organization and then click on the "Uninstall" button on the bottom.

## Information Shared With The Enlightn Bot

For the Enlightn Bot to function, it needs some information on which checks failed, the associated lines of code, etc. This information is sent to the Enlightn website when you add the `--report` flag to the Enlightn command.

To be completely transparent as to what information is sent, we are including the details here:
- **Project Metadata:** app name, app env, app URL, Composer project name, Github repository, Github PR number.
- **Analyzer information (for each check):** title, status (passed/failed), analyzer metadata (such as the docs URL, severity, etc.), line numbers of the code associated with the failed checks, code snippet of 30 lines surrounding the code responsible for failed checks.
- **Analyzer stats:** includes how many analyzers passed/failed/skipped, etc. by category.

This information is used for the Github bot to add the review comments on the pull request diff and for compiling the report comment.

The information may be available for you to view (and share with colleagues as you choose) on the Enlightn website in future releases.

If you do not want to share the above information, do not install the Github bot as without it, it cannot function properly. None of the other Enlightn features share any information, so you are free to use those.
