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

  const now = Date.now();

  const title = 'Title';
  const body = `Body ${now}`;
  
  const notificationOptions = {
    icon: 'http://cdn.discordapp.com/avatars/362786096926556160/beab1e05879ecd9ad146000aecbd481f.png?size=128',
    body,
    tag: now,
    silent: true,
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
