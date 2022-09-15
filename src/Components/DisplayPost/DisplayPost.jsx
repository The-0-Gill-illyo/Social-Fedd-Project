
const DisplayPost = (props) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Post</th>
            </tr>
            </thead>
            <tbody>
            {props.parentEntries.map((entry, index) => {
                return (
                    <tr key={index}>
                        <td>{entry.name}</td>
                        <td>{entry.post}</td>
                        <button type="like">Like</button>
                        <button type="dislike">Dislike</button>
                    </tr>
                );
            })}
            </tbody>
        </table>
      );
}
 
export default DisplayPost;