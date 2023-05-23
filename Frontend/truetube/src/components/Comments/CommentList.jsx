
const CommentList = (props) => {
    return ( 
        <table>
        <thead>
          <tr>
            <th>Entry Number</th>
            <th>Comment</th>
            <th>Dislikes</th>
            <th>Likes</th>
          </tr>
        </thead>
        <tbody>
            {props.parentEntry.map((entry, index) => {
            return (
                <tr>
                    <td>{index + 1}</td> 
                    <td>{entry.Comment}</td>
                    <td>{entry.Likes}</td>
                    <td>{entry.Dislikes}</td>
                    <td><button onClick={() => props.makeComment()}>Like</button></td>
                    <td><button onClick={() => props.editComment()}>Edit</button></td>
                    <td><button onClick={() => props.deleteComment()}>Delete</button></td>
                </tr>
            );
          })}
        </tbody>
      </table>
     );
}
 
export default CommentList;