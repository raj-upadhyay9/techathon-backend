import Certificate from "../db/models/certificate/certificate";
import { connect, disconnect } from "../db/config/config"
(async () => {
    connect();
    const events = [
        {event_id: "aearwlkgj",user_id: "emma@gmail.com",certificate_id:"sldkfj34t",certificate_link:"sdklf jwe@sdlgkj"}
  ];
  try {
    for (const event of events) {
      await Certificate.create(event);
      console.log(`Created user ${event.event_id} ${event.user_id}`);
    }
    disconnect();
  } catch (e) {
    console.error(e);
  }
})();