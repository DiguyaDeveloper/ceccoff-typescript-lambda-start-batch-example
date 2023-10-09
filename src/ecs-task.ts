import AWS from 'aws-sdk';

const s3 = new AWS.S3();

// my s3 bucket name
const ETLBucket: string = process.env.ETLBucket ?? '';

// path where the files need to retrived
const ETLKEY: string = process.env.ETLKEY ?? '';

const params: AWS.S3.Types.GetObjectRequest = {
  Bucket: ETLBucket,
  Key: ETLKEY,
};

s3.getObject(params, function (err, data: AWS.S3.Types.GetObjectOutput) {
  console.log('data', data);

  if (err) {
    console.log('err', err);
  } else {
    console.log('S3 Object retrived for processing');
    //print s3 content type
    console.log('CONTENT TYPE:', 'ContentType');
  }
});
