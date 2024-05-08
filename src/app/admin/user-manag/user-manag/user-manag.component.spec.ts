import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagComponent } from './user-manag.component';

describe('UserManagComponent', () => {
  let component: UserManagComponent;
  let fixture: ComponentFixture<UserManagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserManagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserManagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
