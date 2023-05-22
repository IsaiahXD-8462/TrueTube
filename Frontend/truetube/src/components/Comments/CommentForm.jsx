import React, { useState } from 'react';

const CommentForm = (props) => {

    const [comment, addComment] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newComment = {
            comment: comment
        };
        console.log(newSong);
        props.addNewCommentProperty(newComment)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Song</label>
            <input type='text' value={comment} onChange={(event) => makeComment(event.target.value)} />
            <button type='submit'>Submit</button>
        </form>
     );
}
 
export default CommentForm;