import createReducer from './createReducer.js'
import { PRIMARY } from 'mrn';

export const CHANGE_PRIMARY = 'CHANGE_PRIMARY';
export const CHANGE_ROUTER = 'CHANGE_ROUTER';

export const main = createReducer({primary: PRIMARY, currRouter: 'Menu'}, {
    [CHANGE_PRIMARY](state, action) {
        return Object.assign({}, state, {
            primary: action.primary
        });
    },
    [CHANGE_ROUTER](state, action) {
        return Object.assign({}, state, {
            currRouter: action.router
        })
    }
});

export function changePrimary(primary) {
    return {
        type: CHANGE_PRIMARY,
        primary
    }
}

export function changeRouter(router) {
    return {
        type: CHANGE_ROUTER,
        router
    }
}