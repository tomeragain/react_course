export default function TabBButton ({children, onSelect}) {
    return (
        <li><button onClick={onSelect} >{children}</button></li>
    )
}