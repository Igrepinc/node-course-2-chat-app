const expect = require('expect');

const { Users } = require('./Users');

describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React course'
        }, {
            id: '3',
            name: 'Julie',
            room: 'Node course'
        }]
    });

    it('Should add new user', () => {
        const users = new Users();
        const user = {
            id: '123',
            name: 'Andrew',
            room: 'The office fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    })

    it('Should return names for node course', () => {
        const userList = users.getUserList('Node course');

        expect(userList).toEqual(['Mike', 'Julie']);
    })

    it('Should return names for react course', () => {
        const userList = users.getUserList('React course');

        expect(userList).toEqual(['Jen']);
    })

    it('should remove a user', () => {
        const userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        const userId = '99';
        var user = users.removeUser(userId);

        expect(user.id).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('Should find user', () => {
        const userId = '2';
        const user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('Should not find user', () => {
        const userId = '99';
        const user = users.getUser(userId);

        expect(user.id).toNotExist();
    });

})