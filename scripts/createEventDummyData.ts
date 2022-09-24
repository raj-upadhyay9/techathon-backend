import Event from "../db/models/event/events";
import { connect, disconnect } from "../db/config/config"
(async () => {
    connect();
    const events = [
        { event_id: "aearwlkgj", eventName: "Tech-a-thon", eventDate: new Date(2022, 9, 24), imageLink: "a", host: "a", location: "a", desc: "a", available: "a", domain: "a", price: 3, duration: "2:40" },
        { event_id: "asdfsrwlkgj", eventName: "Code-a-thon", eventDate: new Date(2022, 9, 24), imageLink: "a", host: "a", location: "a", desc: "a", available: "a", domain: "a", price: 3, duration: "2:40" },
        { event_id: "aeadsgdslkgj", eventName: "Munch-a-thon", eventDate: new Date(2022, 9, 24), imageLink: "a", host: "a", location: "a", desc: "a", available: "a", domain: "a", price: 3, duration: "2:40" },
        { event_id: "aearwlkgdssdj", eventName: "Comp-a-thon", eventDate: new Date(2022, 9, 24), imageLink: "a", host: "a", location: "a", desc: "a", available: "a", domain: "a", price: 3, duration: "2:40" },
        
  ];
  try {
    for (const event of events) {
      await Event.create(event);
      console.log(`Created user ${event.event_id} ${event.eventName}`);
    }
    disconnect();
  } catch (e) {
    console.error(e);
  }
})();