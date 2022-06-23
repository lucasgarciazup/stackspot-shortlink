#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ApiShortlinkServiceStack } from '../lib/api-shortlink-service-stack';

const app = new cdk.App();
new ApiShortlinkServiceStack(app, 'ApiShortlinkServiceStack');
