import Transaction from "../db/models/transaction/transaction";
import { connect, disconnect } from "../db/config/config"
(async () => {
    connect();
    const events = [
        {event_id: "aearwlkgj",user_id: "emma@gmail.com",transaction_id:"sldkfj34t"}
  ];
  try {
    for (const event of events) {
      await Transaction.create(event);
      console.log(`Created user ${event.event_id} ${event.user_id}`);
    }
    disconnect();
  } catch (e) {
    console.error(e);
  }
})();