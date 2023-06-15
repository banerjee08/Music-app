import React, { useState } from 'react';

function Albums(props) {
  const albumArr = props.albums;
  const [title, setTitle] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      const albumData = {
        title: title.trim(),
        image: '',
      };
      props.addAlbum(albumData);
      setTitle('');
    }
  };

  console.log(albumArr);
  return (
    <section className="album-container">
      <div className="album">
        <div className="add-album">
          <form onSubmit={handleSubmit}>
            <button type="submit">
              <img src="./Assets/plus.png" className="add-album-icon" />
            </button>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="Enter album title"
            />
          </form>
          <h3>Add Album</h3>
          {/* <div className="album-desc">
                    </div> */}
        </div>
      </div>
      {albumArr.map((album, index) => (
        <div
          className="album"
          key={album.id}
          style={{
            backgroundImage: `url(${album.image})`,
            backgroundSize: 'cover',
          }}
        >
          <div className="album-details">
            <div className="album-desc">
              <h3>Album {index + 1}</h3>
              <h5>{album.title}</h5>
            </div>
            <div className="action-btns">
              <button className="del-btn">
                <img src="./Assets/bin.png" className="del-icon" />
              </button>
              <button className="edit-btn">
                <img src="./Assets/setting.png" className="edit-icon" />
                <p>Edit</p>
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Albums;
