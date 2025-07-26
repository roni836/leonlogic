const SearchIcon = ({className=''}) => {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.0999 19.1998C15.5734 19.1998 19.1998 15.5734 19.1998 11.0999C19.1998 6.62646 15.5734 3 11.0999 3C6.62646 3 3 6.62646 3 11.0999C3 15.5734 6.62646 19.1998 11.0999 19.1998Z"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20.9991 21L19.2938 19.2947"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default SearchIcon;
