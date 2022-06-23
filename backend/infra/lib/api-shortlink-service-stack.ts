import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import ddb from '../config/aws';
import { v4 as uuidv4 } from 'uuid';

import Shortlink from '../types/shortlink';

const TABLE_NAME = 'SHORTLINK_LIST'
export class ApiShortlinkServiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
  }

  create(scope: Construct, params: Omit<Shortlink, 'id'>) {
    const data = {
      TableName: TABLE_NAME,
      Item: {
        'SHORTLINK_ID' : {S: uuidv4()},
        'SHORTLINK_SLUG' : {S: params.slug},
        'SHORTLINK_URL': {S: params.url}
      }
    };

    ddb.putItem(data, function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data);
      }
    });
  }

  update(scope: Construct, params: Shortlink) {
    const data = {
      TableName: TABLE_NAME,
      Item: {
        'SHORTLINK_ID' : {S: params.id},
        'SHORTLINK_SLUG' : {S: params.slug},
        'SHORTLINK_URL': {S: params.url}
      }
    };

    ddb.putItem(data, function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data);
      }
    });
  }

  delete(scope: Construct, params: Pick<Shortlink, 'id'>) {
    var data = {
      TableName: TABLE_NAME,
      Key: {
        'SHORTLINK_ID': {S: params.id}
      }
    };
   
    ddb.deleteItem(data, function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data);
      }
    });
  }       
}
