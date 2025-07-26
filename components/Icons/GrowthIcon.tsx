const GrowthIcon = ({ className = '' }) => {
    return (
        <svg
            className={className}
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.999 1V16.8838C19.999 18.8295 20.9754 20.6454 22.5986 21.7183L35.8511 30.478C37.8402 27.4744 38.999 23.8725 38.999 20C38.999 9.50663 30.4923 1.00007 19.999 1Z"
                fill="#014E3D"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39 20C39 30.4933 30.4933 39 20 39C9.50657 39 1 30.4933 1 20C1 9.50666 9.50646 1.00012 19.9998 1V16.8838C19.9998 18.8295 20.9762 20.6454 22.5993 21.7183L35.8518 30.478C37.841 27.4744 39 23.8725 39 20C39 9.50663 30.493 1.00007 19.9998 1C19.9997 1 19.9998 1 19.9998 1C30.493 1.00007 39 9.50663 39 20Z"
                fill="#07D673"
            />
        </svg>
    );
};

export default GrowthIcon;
