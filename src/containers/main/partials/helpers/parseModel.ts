const parseModel = model => {
    const keys = Object.keys(model);
    const names: string[] = keys.map(x => model[x].name);
    return { keys, names };
};

export default parseModel;
