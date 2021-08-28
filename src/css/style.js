import { makeStyles } from '@material-ui/core';
const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '90%',
            margin: theme.spacing(1)
        }
    },

    videoRoot: {
        // display: 'inline-flex',
        // flexWrap: 'wrap',
        // justifyContent: 'space-around',
        // overflow: 'hidden',
        width:'100%',
        
        // marginLeft:'50%'
        // backgroundColor: theme.palette.background.paper,
    },

    imageList: {
        width: '100%',
        height: '70vh',
        cursor: 'pointer',
        flex:'inline-flex'
    },


    searchBarContainer: {
        paddingBlock: 20, 
        // width: '100%',
        textAlign: 'center',
        justify: 'center', 
        justifyContent: 'center', 
        // display: 'flex'
        
    },

    topContainer: {
        width:'100%',
        // marginInline:'2%',
        justify: 'center', 
        justifyContent: 'center', 
        
        // display: 'inline'
    },

    belowContainer: {
        width:'100%',
        display: 'inline-flex',
        overflow:'hidden'
    },

    searchBar: {
        marginInline: '1%',
        // display: 'flex'
    },

    searchText: {
        width:'80%',
        // display:'inline-flex'
    },

    searchIcon: {
        width: '5%',
        // display:'inline-flex'
    },

    videoHolder: {
        // height: '100%',
        width:'30%',
        // background:'red'
        // paddingBlock: 50,
        // display:'inline-flex',
        // float:'right',

    },

    videoDetailRoot: {
        marginTop: '5%',
        marginRight:'3%',
        height:'100%'
        // width: 900,
    },
    
    
    videoDetailContainer: {
        display: 'inline-flex',
        float: 'left',
        width: '100%',
    }
    
    
}))

export default useStyle;