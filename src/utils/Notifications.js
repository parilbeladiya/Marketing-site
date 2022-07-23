import { toast } from 'react-toastify'; // Notification message container

const showNotification = (message, type, timeOut, position) => toast(
  message,
  {
    type, // allowed types ["info","success","warning","error","default"]
    autoClose: timeOut,
    hideProgressBar: true,
    position,
  },
);

export default showNotification;
