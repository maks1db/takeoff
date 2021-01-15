const pipe = (value, ...functions: (Function | Boolean)[]) =>
    functions
        .filter(Boolean)
        .reduce((newValue, func) => (func as Function)(newValue), value);

export const pipeF = (...functions: (Function | Boolean)[]) => (value?: any) =>
    pipe(value, ...functions);

export default pipe;
