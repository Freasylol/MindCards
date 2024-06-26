import { makeStyles } from '@material-ui/core/styles';

const useSharedStyles = makeStyles((theme) => ({
    "@global": {
        body: {
            backgroundColor: '#0A092E',
        },
      },
    root: {
        flexGrow: 1,
        backgroundColor: '#0A092E',
    },
    wrapper: {
        paddingTop: '50px',
        backgroundColor: '#0A092E',
        color: '#F6F7FB'
    }, 
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
    },
    btn: {
        outline: 'none',
        border: 'none',
        backgroundColor: '#4255FF',
        
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        
        cursor: 'pointer',

        borderRadius: '60px',
        padding: '5px 20px',  
        color: '#fff'  
    },
}));

export default useSharedStyles;
