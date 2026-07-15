import kue from 'kue';

const queue = kue.createQueue();

const job = queue.create('push_notification_code', {
  phoneNumber: '4153518780',
  message: 'This is the code 1234 to verify your account',
}).save((err) => {
  if (!err) {
    console.log(`Notification job created: ${job.id}`);
  }
});