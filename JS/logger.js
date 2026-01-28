export function logAction(action, user) {
  const log = {
    action,
    user,
    time: new Date().toISOString()
  };
  console.log("LOG:", log);
}
