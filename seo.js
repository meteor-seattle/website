Meteor.startup(function() {
  if(Meteor.isClient) {
    SEO.config({
      title: 'Meteor LA',
      meta: {
        'description': 'Meteor.js Meetups in Las Angeles, CA'
      },
      og: {
        'image': Meteor.absoluteUrl('share-image.png')
      },
      ignore: {
        meta: ['fragment', 'viewport', 'msapplication-TileColor', 'msapplication-TileImage', 'msapplication-config'],
        link: ['stylesheet', 'apple-touch-icon', 'rel', 'shortcut icon', 'icon']
      }
    });
  }
});
