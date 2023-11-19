import { Items } from "./items";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export const List = ({ lists, toSearch, onDelete }) => {
    const filteredList = toSearch ? lists.filter(({ Name }) => Name.toLowerCase().includes(toSearch.toLowerCase())) : lists;
    return (
        <div className="every">
            <div className="table">
                <div className="table_header">
                    <div>
                        <FontAwesomeIcon icon={faUser} />
                        Name
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhone} />
                        Phone
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} />
                        Email
                    </div>
                </div>
            </div>
            <ul>
                {filteredList.map(({ id, Name, num, email }) => (
                    <Items onDelete={() => onDelete(id)} id={id} key={id} Name={Name} num={num} email={email} />
                ))
                }
            </ul>
        </div>
    );
}   