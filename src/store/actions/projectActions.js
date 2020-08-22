export const createProject = (project) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const id = getState().firebase.auth.uid;

        firestore.collection('projects').add({
            ...project,
            firstName: profile.firstName,
            lastName: profile.lastName,
            authorId: id,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: "CREATE_PROJECT", project })
        }).catch((err) => {
            dispatch({ type: "CREATE_PROJECT_ERROR", err })
        })
    }
}