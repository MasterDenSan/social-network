export const required = (value: any) =>{
    if(value) return undefined;
    return "Field is required.";
}

export const maxLengthCreator = (maxLength: number) => (value: any) => {
    if(value.length > maxLength) return `Max length ${maxLength}`;
    return undefined;
}

export const minLengthCreator = (minLength: number) => (value: any) => {
    if(value.length < minLength) return `Min length ${minLength}`;
    return undefined;
}
