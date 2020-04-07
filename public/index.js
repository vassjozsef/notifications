const notifyButton = document.getElementById('notifyButton');

notifyButton.onclick = notify;

function notify() {
  requestPermission();
  showNotification();
}

async function requestPermission() {
  const permission = await Notification.requestPermission();
  console.info('Notification permission: ', permission);
}

function showNotification() {
  let Notification = window.Notification;

  const title = 'Title';
  const body = 'Body';
  
  const notificationOptions = {
    body,
  };

  let notification;

  try {
    notification = new Notification(title, notificationOptions);
    notification.onshow = () => { console.info('notification shown'); };
    notification.onclose = () => { console.info('notification closed'); };
    notification.onerror = () => { console.info('notification error'); };
    notification.onclick = () => { console.info('notification clicked'); };
  } catch (e) {
    console.info('Failed to create notification',e);
  }

  console.info(notification);
}
