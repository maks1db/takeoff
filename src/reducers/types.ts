import { RouterState } from 'connected-react-router';

import { RootState } from './root';
import { ContactsState } from './contacts';

interface State {
    root: RootState;
    router: RouterState;
    contacts: ContactsState;
}

export default State;
