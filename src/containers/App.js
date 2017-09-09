import { connect } from 'react-redux';
import AppComponent from '../components/App';

const mapStateToProps = (state) => {
    return {
        loggedIn: state.logged_in,
        cssStyle: state.logged_in ? 'login' : 'index'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);