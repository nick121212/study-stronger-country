const toString = Object.prototype.toString;

function isTypeOf(type: string) {
    return (val: any): boolean => {
        const typeOfVal = toString.call(val);

        return typeOfVal.substring(8, typeOfVal.length - 1).toLowerCase() === type.toLowerCase();
    };
}

export const isArray = isTypeOf("Array");
export const isObject = isTypeOf("Object");
export const isString = isTypeOf("String");
export const isNumber = isTypeOf("Number");
