import EventRegister from "../db/models/eventRegister/eventRegister";
import { connect, disconnect } from "../db/config/config"
(async () => {
    connect();
    const events = [
        {event_id: "aearwlkgj",user_id: "emma@gmail.com"}
  ];
  try {
    for (const event of events) {
      await EventRegister.create(event);
      console.log(`Created user ${event.event_id} ${event.user_id}`);
    }
    disconnect();
  } catch (e) {
    console.error(e);
  }
})();