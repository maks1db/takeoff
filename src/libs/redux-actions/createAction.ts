import { __, assoc } from 'ramda';
import { Option } from 'funfix-core';

export function createAction(type: string): () => Record<'type', string>;
export function createAction<T>(
    type: string,
): (payload: T) => Record<'type', string> & Record<'payload', T>;
export function createAction(type) {
    const actionResult = { type };
    const action = payload => Option.of(payload)
        .map(assoc('payload', __, actionResult))
        .getOrElse(actionResult);

    action.toString = () => type;
    return action;
}
