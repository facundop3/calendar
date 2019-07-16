export const handleEnterPress = (ev: any, callback: (e: any) => any) => {
  if (ev.key === "Enter") {
    return callback(ev);
  }
};
