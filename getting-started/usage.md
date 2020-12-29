# Running Enlightn

## Enlightn Command

After installing Enlightn, simply run the `enlightn` Artisan command to run Enlightn:

```bash
php artisan enlightn
```

<img :src="$withBase('/images/terminal.png')" alt="Enlightn Terminal" />

## Failed Checks

All checks that fail will include a description of why they failed along with the associated lines of code (if applicable).

<img :src="$withBase('/images/timeout.png')" alt="Failed Check" />

## Report Card

Finally, after all the checks have run, the `enlightn` Artisan command will output a report card, which contains information on how many and what percentage of checks passed, failed or were skipped.

<img :src="$withBase('/images/report_card.png')" alt="Report Card" />

The checks indicated as "Not Applicable" were not applicable to your specific application and were skipped. For instance, the CSRF analyzer is not applicable for stateless applications.

The checks reported under the "Error" row indicate the analyzers that failed with exceptions during the analysis. Normally, this should not happen but if it does, the associated error message will be displayed and may have something to do with your application.