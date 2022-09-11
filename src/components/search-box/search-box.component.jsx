import './search-box.styles.css';

const SearchBox = ({ className, onChangeHandler, placeholder }) => (

    <div>
        <input
            className={`search-box ${className}`}
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    </div>
)


export default SearchBox;