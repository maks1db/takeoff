import { shallowEqual, useSelector } from 'react-redux';
import State from '../reducers/types';

const mapState = (state: State) => ({
    isAuth: state.root.authState === 'ok',
});
const AuthWrapper = ({ children }) => {
    const { isAuth } = useSelector(mapState, shallowEqual);

    return isAuth ? children : null;
};

export default AuthWrapper;
