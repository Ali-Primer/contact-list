import { useState } from "react";

export const Add = ({ onAdd, exist }) => {
    const [Name, setName] = useState("")
    const [num, setNum] = useState("")
    const [email, setEmail] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({Name, num, email})
        setName("")
        setEmail("")
        setNum("")
    }
    return (
        <div>
            {exist && <div className="alert">Name repeated before</div>}
            <form className="add_form" onSubmit={handleSubmit}>
                <input required type="text" value={Name} onChange={({ target }) => setName(target.value)} placeholder="Your name here..." />
                <input required type="number" value={num} onChange={({ target }) => setNum(target.value)} placeholder="Phone number here..." />
                <input type="email" value={email} onChange={({ target }) => setEmail(target.value)} placeholder="Email here..." />
                <button type="submit">+ Add</button>
            </form>
        </div>
    )
}