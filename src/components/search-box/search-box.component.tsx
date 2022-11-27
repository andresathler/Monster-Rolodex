import { ChangeEvent } from "react";

import './search-box.styles.css';


type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ className, onChangeHandler, placeholder } : SearchBoxProps) => (

    <div>
        <input
            className={`search-box ${className}`}
            type='search'
            placeholder={placeholder}
            onChange={(e) => onChangeHandler(e)}
        />
    </div>
)


export default SearchBox;