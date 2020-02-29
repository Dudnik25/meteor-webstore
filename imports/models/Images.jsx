import {FilesCollection} from 'meteor/ostrio:files';

const Images = new FilesCollection({
  collectionName: 'Images',
  allowClientCode: false,
  onBeforeUpload(file) {
    if (file.size <= 5242880 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    }
    return 'Максимальный размер изображения 5MB';
  }
});

export default Images;


// Это тут не нужно!
if (Meteor.isClient) {
  Meteor.subscribe('files.images.all');
}
// это тоже
if (Meteor.isServer) {
  Meteor.publish('files.images.all', function () {
    return Images.find().cursor;
  });
}
