function logEvent(eventType, details) {
  const logData = {
    event: eventType,
    details: details,
    timestamp: new Date().toISOString()
  };

  console.log("LOG:", logData);
}
