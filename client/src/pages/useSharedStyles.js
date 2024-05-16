import { makeStyles } from '@material-ui/core/styles';

const useSharedStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#0A092E'
    },
    wrapper: {
        paddingTop: '50px',
        backgroundColor: '#0A092E',
        height: '90vh',
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
        width: '50px',
        padding: '5px 20px',  
        color: '#fff'  
    },
}));

export default useSharedStyles;
