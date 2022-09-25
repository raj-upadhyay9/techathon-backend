import allowCertificate from "../db/models/allowCertificate/allowCertificate";
import { connect, disconnect } from "../db/config/config"
(async () => {
    connect();
    const events = [
        {event_id: "aearwlkgj",allow:true}
  ];
  try {
    for (const event of events) {
      await allowCertificate.create(event);
      console.log(`Created user ${event.event_id} ${event.allow}`);
    }
    disconnect();
  } catch (e) {
    console.error(e);
  }
})();