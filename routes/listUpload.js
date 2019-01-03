const path = require('path');

module.exports = (app) => {
  app.get('/upload', (req, res, next) => {
    let uploadedFile = req.files;
    console.log('rwerae: ', req.files.file);

    let fileName = 'guest_list.xlsx';
    const fileStorePath = path.join(__dirname, '../public/files/');
    uploadedFile.mv(
      `${fileStorePath}${fileName}`,
      function (err) {
        if (err) { return next(err) }
        res.json({
          file: `public/${fileName}`,
        })
      }
    )
  })
}