import { RouterState } from 'connected-react-router';

import { RootState } from './root';

interface State {
    root: RootState;
    router: RouterState;
}

export default State;
