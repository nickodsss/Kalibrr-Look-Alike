
export default function Button({ onClick, className, name }) {
    return (
        <>
            <button onClick={onClick} className={className}>
                {name}
            </button>
        </>
    )
}