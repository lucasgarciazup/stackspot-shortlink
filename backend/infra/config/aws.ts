import AWS from 'aws-sdk';
// Set the region 
AWS.config.update({region: 'REGION'});
// Create the DynamoDB service object
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

export default ddb;