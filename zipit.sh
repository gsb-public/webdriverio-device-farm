#!/bin/bash
rm *.zip
rm *.tgz
npm-bundle
zip -r aws-wdio-example-4 wdio-example-4-1.0.0.tgz