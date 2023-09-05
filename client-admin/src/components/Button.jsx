
export default function Button({ type, onClick, className, name }) {
    return (
        <>
            <button onClick={onClick} type={type} className={className} >
                {name}
            </button>
        </>
    )
}