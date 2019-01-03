const readXlsxFile = require('read-excel-file/node');
const Utils = require('../utils/index');
const path = require('path');
const mongoose = require('mongoose');
const fs = require('fs');
const Guest = mongoose.model('guests');
const fileStorePath = path.join(__dirname, '../uploads/files/');
const fileName = 'guest_list.xlsx';

module.exports = (app) => {
  app.post('/upload', (req, res) => {
    if (Object.keys(req.files).length == 0) {
      return res.status(400).send('No files were uploaded.');
    }
    let uploadedFile = req.files.file;
    uploadedFile.mv(
      `${fileStorePath}${fileName}`,
      function (err) {
        if (err) { return err }
        res.json({
          filepath: `uploads/${fileName}`,
        })
      }
    )
  });

  app.get('/api/add_guests', (req,res) => {
    readXlsxFile(fs.createReadStream(`${fileStorePath}${fileName}`))
        .then(rows => {
          const guests = Utils.rowsToModel(rows);
          Guest.insertMany(guests, (err, docs) => {
            if(err) { return err }
            res.json(docs);
          })
      });
    });
  
    app.get('/api/guests', async (req, res) => {
      const guests = await Guest.find();
      res.json(guests);
    });
  
  }

