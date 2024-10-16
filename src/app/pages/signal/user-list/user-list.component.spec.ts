import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { User } from '../../../shared/models/user';
import { UserListComponent } from './user-list.component';


describe('UserListComponent', () => {

  @Component({
    imports: [UserListComponent],
    standalone: true,
    template: `<app-user-list [users]="users" />`
  })
  class TestHost {
    users: User[] = [];
  }

  it(`should render users from the input`, () => {
    const testUser = { id: "1", name: 'Test', lastName: 'Lastname', username: 'testname' };
    const fixture = TestBed.createComponent(TestHost)

    fixture.componentInstance.users = [testUser];
    fixture.detectChanges();
    const rows = fixture.debugElement.queryAll(By.css('li'));

    expect(rows.length).toBe(1);
    expect(rows[0].nativeElement.innerText).toContain('Test Lastname')
  })

})