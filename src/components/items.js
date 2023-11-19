export const Items = ({ onDelete, Name, num, email }) => {
    return (
        <li className="items">
            <div className="items_list">
                <div>{Name}</div>
                <div>{num}</div>
                <div>{email}</div>
            </div>
            <div className="items_button">
                <button onClick={onDelete}>Delete</button>
            </div>

        </li>
    )
}