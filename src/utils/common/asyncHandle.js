
const asyncHandle = async(fn, ...args)=>{
    try {
            return [null, await fn(...args)]
    } catch (error) {
        return [{error}]
    }
};
export default asyncHandle;