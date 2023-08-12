function GalleryItem(item, getGallery) {

    return (
        <>
          
          <img
            src={item.path}
            alt="Clickable Image"
            // onClick={handleImageClick}
            style={{ cursor: 'pointer' }} // Change cursor to indicate clickability
          />
        
        </>
      );

}


export default GalleryItem;