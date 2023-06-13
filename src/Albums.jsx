import React from 'react'

function Albums() {
    return (
        <section ClassName="album-container">
            <div className="album">
                <div className="album-details">
                    <div className="album-desc">
                        <h3>Album 1</h3>
                        <h5>Title 1</h5>
                    </div>
                    <div className="action-btns">
                        <button className="del-btn">
                            <img src="./Assets/bin.png" className="del-icon" />
                        </button>
                        <button className="edit-btn">
                            <img src="./Assets/setting.png" className="edit-icon"/>
                            <p>Edit</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="album">
                <div className="add-album">
                    <button>
                        <img src="./Assets/plus.png" className="add-album-icon"/>
                    </button>
                        <h3>Add Album</h3>
                    {/* <div className="album-desc">
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Albums