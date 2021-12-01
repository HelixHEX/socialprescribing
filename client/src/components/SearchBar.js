import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from "@material-ui/core/styles";
import "@reach/combobox/styles.css";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    margin: "0 auto",
    width: '100%',
    padding: '12px 12px 12px 15px',
    border: '0',
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);',
    fontSize: '1.2em',
    font: 'inherit',
    outline: 'none',
    borderRadius: '5px',
  },
  searchForm: {
    display: 'flex',
  },
  searchIcon: {
    position: 'absolute',
    right: '0',
    borderRadius: '5px',
    padding: '11px',
    backgroundColor: 'white',
    border: 'none',
    display: 'flex',
    alignItems: 'center'
  },
  inputWrapper: {
    width: '100%',
  },
  suggestionList: {
    width: '100%',
  },
  suggestionItem: {
    fontFamily: 'inherit',
    fontSize: '1.2em',
    fontWeight: 'bold',
  }
}))

let SearchBar = (props) => {
  const {
    submitForm = null,
    handleSelect = null,
    handleInput = null,
    ready = null, value = null,
    data = null,
    status = null
  } = props

  const classes = useStyles();

  return (
    <form onSubmit={(e) => submitForm(e)} className={classes.searchForm}>
      <Combobox onSelect={handleSelect} aria-labelledby="demo" className={classes.inputWrapper}>
        <ComboboxInput value={value} onChange={handleInput} disabled={!ready} className={classes.searchBar} placeholder="Search your location." />
        <ComboboxPopover>
          <ComboboxList className={classes.suggestionList}>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} className={classes.suggestionItem} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
      <button className={classes.searchIcon} type="submit"> <SearchIcon color="disabled" /> </button>
    </form>
  );
};

export default SearchBar