const Guest = require('../models/guest');

exports.rowsToModel = (rows) => {
  let header;
  let guests = [];
  rows.forEach((row, index) => {
    if(index === 0) {
      header = row;
    } else {
      const guest = new Guest({ events : []})
      row.forEach((item,index) => {
        if(!header[index].startsWith('event')){
          guest[header[index]] = item
        } else {
          guest['events'].push({
            name: header[index].substring(6,header[index].length),
            isInvited: item,
            isAttending: false
          })
        }
      })
      guests.push(guest);
    }
  });
  return guests;
}