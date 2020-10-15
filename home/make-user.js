export function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        character: formData.get('character'),
        hp: 35,
        gold: 0,
        completed: {}
    };

    return user;
}

export const makeNewUser = (formData) => ({
    name: formData.get('name'),
    character: formData.get('character'),
    hp: 35,
    gold: 0,
    completed: {}
});

export default makeNewUser;
