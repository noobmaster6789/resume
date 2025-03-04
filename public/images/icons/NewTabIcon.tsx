export const NewTabIcon = ({ size = 16, color = "currentColor", className = "" }) => {
    return (
        <svg className={className} width={size}
             height={size}
             viewBox="0 0 24 24"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M17.488 6.51196L5.98804 18.012" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.988 15.0121L17.988 6.35514C17.988 6.15239 17.8236 5.98804 17.6209 5.98804L8.98804 5.98804" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}
