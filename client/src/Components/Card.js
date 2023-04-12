export default function Card({children, padding}) {
    return (
        <div className={"bg-white rounded-2xl shadow-md shadow-gray-200 h-5/6 "+padding}>
            {children}
        </div>
    )
}