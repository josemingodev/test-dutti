import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  getByUsername(email) {
    return new Promise((resolve) => {
      const found = this.getUsers().find(user => user.email === email) || null;
      resolve(found);
    });
  }

  create(user) {
    const service = this;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.getByUsername(user.email)
          .then((duplicateUser) => {
            if (duplicateUser) {
              reject('Email "' + user.email + '" is already taken');
            } else {
              const users = service.getUsers();
              const lastUser = users[users.length - 1] || {id: 0};
              user.id = lastUser.id + 1;

              users.push(user);
              service.setUsers(users);
              resolve();
            }
          });
      }, 1500);
    });
  }


  getUsers() {
    if (!localStorage.users) {
      localStorage.users = JSON.stringify([]);
    }

    return JSON.parse(localStorage.users);
  }

  setUsers(users) {
    localStorage.users = JSON.stringify(users);
  }

}
