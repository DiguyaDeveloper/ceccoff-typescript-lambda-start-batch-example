import AWS from 'aws-sdk';

const batch = new AWS.Batch();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handler = function (event: any, context: any, callback: any) {
  console.log('s3 object', event.Records[0].s3);

  // Set Prams to submitJob
  const params: AWS.Batch.Types.SubmitJobRequest = {
    jobDefinition: process.env.JOB_DEFINITION ?? '',
    jobName: process.env.JOB_NAME ?? '',
    jobQueue: process.env.JOB_QUEUE ?? '',
    containerOverrides: {
      environment: [
        {
          name: 'ETLBucket',
          value: event.Records[0].s3.bucket.name,
        },
        {
          name: 'ETLKEY',
          value: event.Records[0].s3.object.key,
        },
      ],
    },
  };

  batch.submitJob(params, function (err, data) {
    if (err) {
      console.log(err, err.stack);
      return callback(err);
    } else {
      console.log(data);
      return callback();
    }
  });
};
