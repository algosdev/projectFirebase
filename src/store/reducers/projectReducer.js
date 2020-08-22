const initState = {}
const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log("Created project is", action.project);
            return state;
        case "CREATE_PROJECT_ERROR":
            console.log(action.err);
            return state;
        default:
            return state;
    }
}
export default projectReducer;