import { RECORD_FORM_UPDATE } from './types';

export const recordFormUpdate = ({ prop, value }) => {
    return {
        type: RECORD_FORM_UPDATE,
        payload: { prop, value }
    };
}
