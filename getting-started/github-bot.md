---
description: The Enlightn Github Bot can add review comments and compile reports for your pull requests. Learn how you can integrate with the Enlightn Github bot. 
image: https://cdn.laravel-enlightn.com/images/github_bot.png
twitterCard: summary_large_image
---

# Github Bot Integration
[[toc]]

## The Enlightn Github Bot

Enlightn has a Github Bot that can do the following:
- Compile a report for every pull request highlighting the failed checks.
- Add review comments on the pull request diff on the lines of code that introduce new issues.

Here's how the compiled report and review comments look like for every pull request or push to a pull request:

<img :src="$withBase('/images/github_bot.png')" alt="Enlightn Github Bot PR Review" />

## Who Can Install

- **Public Repositories:** Anyone can install the Github bot for public / open source repositories.
- **Private Repositories:** Only Enlightn Pro users can install the Github bot on private repositories.

## Installation Steps

1. First, make sure that you have Enlightn version 1.16.0 (or higher) or Enlightn Pro version 1.11.0 (or higher) installed.
2. If you haven't already, [signup on the Enlightn website](https://www.laravel-enlightn.com/register).
3. Next, visit the [Repositories section](https://www.laravel-enlightn.com/repositories) on the Enlightn website and click on the "**Add Github Repositories**" button. This will redirect to a Github page, where you can choose which repositories you would like to install the Enlightn Github bot on.
4. After installation of the Github app, you should see your installed repositories in the [Repositories section](https://www.laravel-enlightn.com/repositories). In case you don't see the new installed repositories immediately, you may need to give it a refresh after a few seconds.
5. Next, integrate Enlightn as a Github action as described [here](usage.html#usage-in-ci-environments). If you are not familiar with Github actions, see below for a [full example of an Enlightn Github action](#full-working-example-of-github-action).
6. Next, add your Enlightn credentials and Github repository name in your `config/enlightn.php` and `.env` files respectively. Your username is the email you used to register on Enlightn. The API token can be found on the [projects page](https://www.laravel-enlightn.com/projects) of the website after logging in. Navigate to your relevant project (or create a new project and link it to your Enlightn Pro license) and copy the API token.

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
    'username' => env('ENLIGHTN_USERNAME'), // your registered email
    'api_token' => env('ENLIGHTN_API_TOKEN'), // your project API token
],

// Set this value to your Github repo for integrating with the Enlightn Github Bot
// Format: "myorg/myrepo" like "laravel/framework".
'github_repo' => env('ENLIGHTN_GITHUB_REPO'),
```

In your `.env` file:
```ini
ENLIGHTN_USERNAME=your@email.com
ENLIGHTN_API_TOKEN=<your project API token here>
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

## Full Working Example of Github Action

If you're new to Github actions, don't worry. We have you covered! Here's a full working example of a Github action that you can configure right away.

Remember to follow points #1-6 and point #8 in the installation instructions above. Then, create a `.github/workflows/enlightn.yaml` file in your repository:

```yaml
name: Enlightn Checks

on: [pull_request]

jobs:
  tests:
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        php: [7.4]

    name: P${{ matrix.php }}

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Setup PHP
        uses: shivammathur/setup-php@v2
        with:
          php-version: ${{ matrix.php }}
          extensions: dom, curl, libxml, mbstring, zip, json
          coverage: none

      - name: Install dependencies
        env:
          ENLIGHTN_USERNAME: ${{ secrets.ENLIGHTN_USERNAME }}
          ENLIGHTN_API_TOKEN: ${{ secrets.ENLIGHTN_API_TOKEN }}
        run: |
          composer config http-basic.satis.laravel-enlightn.com "$ENLIGHTN_USERNAME" "$ENLIGHTN_API_TOKEN"
          composer install --prefer-dist --no-interaction --no-progress --no-scripts

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

The `composer config http-basic.satis.laravel-enlightn.com` line above is only required for Enlightn Pro users. So, you can delete that line (and keep the `composer install` step on the next line) if you are an Enlightn OSS user.  

Feel free to modify the PHP version or add services in the workflow above (if needed).

Learn more about Github actions [here](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions).

## Steps to Uninstall

If you want to uninstall the Enlightn Github bot from some of your repositories, just visit the [Repositories section](https://www.laravel-enlightn.com/repositories) on the Enlightn website and click on the "**Add Github Repositories**" button. This will take you to a Github page where you will see the option to configure the Enlightn Github app on your organizations. Click on the relevant organization and then click on the "Uninstall" button on the bottom.

## Information Shared With The Enlightn Bot

For the Enlightn Bot to function, it needs some information on which checks failed, the associated lines of code, etc. This information is sent to the Enlightn website when you add the `--report` flag to the Enlightn command.

To be completely transparent as to what information is sent, we are including the details here:
- **Project Metadata:** app name, app env, app URL, Composer project name, Github repository, Github PR number.
- **Analyzer information (for each check):** title, status (passed/failed), analyzer metadata (such as the docs URL, severity, etc.), line numbers of the code associated with the failed checks, code snippet of 30 lines surrounding the code responsible for failed checks.
- **Analyzer stats:** includes how many analyzers passed/failed/skipped, etc. by category.

This information is used for the Github bot to add the review comments on the pull request diff and for compiling the report comment.

The information is available for you to view (and share with colleagues as you choose) on the [Enlightn web UI](web-ui.html).

If you do not want to share the above information, do not install the Github bot as without it, it cannot function properly. Only the Github Bot and the web UI need this information, so if you don't want to share this information, you are free to use any other features of Enlightn.
