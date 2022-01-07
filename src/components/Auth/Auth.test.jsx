import {render} from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Auth from './Auth';
import { UserProvider } from '../../context/UserContext/UserContext';

jest.mock('../../services/users');
jest.mock('../../context/UserContext/UserContext');

it('should render a login screen', () => {
    const {container} = render(
        <UserProvider>
            <MemoryRouter>
                <Auth />
            </MemoryRouter>
        </UserProvider>
    )
    expect(container).toMatchSnapshot();
});