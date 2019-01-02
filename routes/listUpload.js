const path = require('path');

module.exports = (app)  => {
  app.get('/api/upload', (req, res, next) => {
    console.log('rwerae: ', req.files.list);
    let uploadedFile = req.files;
    let fileName = 'guest_list.xlsx';
    const fileStorePath = path.join(__dirname, '../public/files/');
    uploadedFile.mv(
      `${fileStorePath}${fileName}`,
      function (err) {
        if(err) { return next(err) }
        res.json({
          file: `public/${fileName}`,
        })
      }
    )
  })
}