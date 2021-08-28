import React from 'react';
import { Button, FormControl, OutlinedInput } from '@material-ui/core';
import useStyle from '../css/style';
import {Search} from '@material-ui/icons';

const SearchBar = (props) => {
    const classes = useStyle();

    return (
        <div className={classes.searchBar}>
            <form onSubmit={props.formSubmission} >
                <FormControl style={{display:'inline'}}>
                    <OutlinedInput 
                        id="outlined-basic"
                        value={props.searchTerm}
                        placeholder="Search"
                        className={classes.searchText}
                        onChange={props.onInputChange} 
                    />

                    
                    <Button onClick={props.formSubmission} className={classes.searchIcon}><Search fontSize='large'/></Button>    
                </FormControl>
            </form>
        </div>
    );
}

export default SearchBar;
