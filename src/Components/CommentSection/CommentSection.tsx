import { useState } from "react";
import "./CommentSection.scss";

const CommentSection = () => {
  const [showComments, setShowComments] = useState(false);
  const [addComments, setAddComments] = useState(false);

  const handleShowComments = ()=>{
    setShowComments(!showComments)
    setAddComments(false)
  }

  return (
    <div className="comment">
      <div className="comTitle" onClick={handleShowComments}>
        <div className="left">
          <img
            src="https://img.icons8.com/ios/100/333333/speech-bubble--v1.png"
            alt="speech-bubble--v1"
          />
          <h4>
            Comments <span>(1)</span>
          </h4>
        </div>

        <div className="right" >
          <img
            className={`down ${showComments? 'up' : ''}`}
            src="https://img.icons8.com/material-rounded/48/777777/chevron-down.png"
            alt="chevron-down"
          />
        </div>
      </div>

      <div className={`comContainer ${showComments ? 'show' : ''}`}>
        <h5>Very nice apartment</h5>
        <div className="profile">
          <img
            src="https://idealestate.com.ng/wp-content/uploads/2023/05/Legitimate-ways-to-make-money-in-Nigeria.jpg"
            alt="avatar"
          />
          <p className="name">Jamil</p>
        </div>
        <p className="time">
          Added <span>9</span> months ago
        </p>

        <button onClick={() => setAddComments(true)} className="ac">Add a comment</button>

        <div className={`addCom ${addComments ? 'show' : ''}`}>
          <div className="addComTitle">
            <img
              src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/333333/external-comment-content-creator-tanah-basah-glyph-tanah-basah.png"
              alt="external-comment-content-creator-tanah-basah-glyph-tanah-basah"
            />
            <h4>Add a comment</h4>
          </div>
          <p>Your Comment</p>
          <textarea id="addCom" placeholder="Enter your comment" />
          <div className="btnWrapper">
            <button className="sb">Submit comment</button>
            <button onClick={() => setAddComments(false)} className="cc">Close comment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
