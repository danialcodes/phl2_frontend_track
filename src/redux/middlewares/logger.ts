const logger = (state) => (next)=> (action) =>{
    console.group(action.type);
    console.info("Prev state =>",state.getState());
    console.info(action);
    next(action);
    console.info("Next state =>",state.getState());
    console.groupEnd();
}

export default logger;