CTRLS.controller('ComicsCtrl', function($scope){

/*
   $ionicModal, $ionicActionSheet, ComicService, $cordovaCamera, $cordovaVibration, $cordovaCapture, $cordovaGeolocation, $cordovaDeviceMotion
  $scope.showModal = showModal;
  $scope.closeModal = closeModal;
  $scope.saveComic = saveComic;
  $scope.deleteComic = deleteComic;
  $scope.showOptions = showOptions;
  $scope.editComic = editComic;
  $scope.choosePicture = choosePicture;
  $scope.takePicture = takePicture;
  $scope.recordingAudio = recordingAudio;
  $scope.getPosition = getPosition;
  $scope.start = start;
  $scope.isNew = true;
  $scope.comic = {};
  $scope.modal = null;
  $scope.comics = [];

  $ionicModal.fromTemplateUrl('templates/comic-modal.html', {
    scope: $scope
  })
  .then(function(modal){
    $scope.modal = modal;
  });

  /*
  ComicService.getAllComics()
  .then(function( comics ){
    $scope.comics = comics;
  });
  */

  /*
  function showModal(){
    $scope.isNew = true;
    $scope.comic = {};
    $scope.modal.show();
  }

  function closeModal(){
    $scope.modal.hide();
  }

  function saveComic(){
    if($scope.isNew){
      $scope.comics.push( $scope.comic );
      ComicService.createComic( $scope.comic.title, $scope.comic.author, $scope.comic.cover, $scope.comic.year );
      $scope.comic = {};
    }
    $scope.modal.hide();
  }

  function deleteComic(index){
    $scope.comics.splice( index, 1 );
  }

  function showOptions( indexComic ){

    $cordovaVibration.vibrate(300);
    
    $ionicActionSheet.show({
      buttons: [
        { text: '<i class="icon ion-share"></i> Share' },
        { text: '<i class="icon ion-edit"></i> Edit' }
      ],
      destructiveText: "<i class='icon ion-trash-b'></i> Delete",
      cancelText: 'Cancel',
      titleText: "Options",
      destructiveButtonClicked: function(){
        $scope.deleteComic( indexComic );
        return true;
      },
      buttonClicked: function(indexButton){
        if(indexButton == 1){
          $scope.editComic( indexComic );
        }
        return true;
      }
    });
  }

  function editComic( index ){
    $scope.isNew = false;
    $scope.comic = $scope.comics[index];
    $scope.modal.show();
  }

  function choosePicture(){

    var options = {
      quality: 100,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: false,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 500,
      targetHeight: 500,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation:true
    };

    $cordovaCamera.getPicture( options )
    .then(function( imgData ){
      $scope.comic.cover = "data:image/jpeg;base64," + imgData;
    });
  }

  function takePicture(){
    var options = {
      quality: 100,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: false,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 500,
      targetHeight: 500,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation:true
    };

    $cordovaCamera.getPicture( options )
    .then(function( imgData ){
      $scope.comic.cover = "data:image/jpeg;base64," + imgData;
    });

  }

  function recordingAudio(){

    var options = {
      limit: 3,
      duration: 10
    };

    $cordovaCapture.captureAudio( options )
    .then(function( rta ){
      console.log( rta );
    })
    .catch(function( error ){
      console.log( error );
    });
  }

  function getPosition(){

    var options = {
      timeout: 3000,
      enableHighAccuracy: false,
      maximumAge: 10000
    };

    $cordovaGeolocation.getCurrentPosition( options )
    .then(function( position ){
      console.log( position );
    });
  }

  function start(){
    var options = {
      frequency: 20000
    };

    var watch = $cordovaDeviceMotion.watchAcceleration(options);

    watch.then(
      null,
      function(error){
        console.log( error );
      },
      function(result){
        console.log(result.x);
        console.log(result.y);
        console.log(result.z);
      }
    );

  }
*/
$scope.settings = {
    enableFriends: true
  };
});