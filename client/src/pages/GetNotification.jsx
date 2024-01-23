import React, { useEffect } from "react";
import Pusher from 'pusher-js';
export const GetNotification = () => {
  useEffect(() => {
    const pusher = new Pusher("3819e1acb951c93f2492", {
      cluster: "ap2",
      encrypted: true,
    });

    const channel = pusher.subscribe("my-channel");
    channel.bind("my-event", (data) => {
      console.log("Received notification: ", data.message);
      alert(JSON.stringify(data.message));
    });

    return () => {
      pusher.unsubscribe("my-channel");
      pusher.disconnect();
    };
  }, []);
  return <div>GetNofication</div>;
};
