#!/bin/bash
rm *.zip
rm *.tgz
npm-bundle
zip -r wdio-device-farm  webdriverio-device-farm-1.0.0.tgz
