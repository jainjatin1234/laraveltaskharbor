import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';

// Mock localStorage since it's not available in the test environment
const localStorageMock = {
  getItem: jasmine.createSpy('getItem'),
  setItem: jasmine.createSpy('setItem'),
  removeItem: jasmine.createSpy('removeItem')
};

describe('AuthGuard', () => {
  let authGuard: AuthGuard; // Use AuthGuard directly
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    // Set up a spy for the router
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,  // Provide AuthGuard directly
        { provide: Router, useValue: routerSpy }
      ]
    });

    // Replace the global localStorage with the mock
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });

    // Initialize the guard
    authGuard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should allow access if token is present in localStorage', () => {
    // Simulate that the token exists in localStorage
    localStorageMock.getItem.and.returnValue('fake-token');

    // Execute the guard's canActivate method
    const result = authGuard.canActivate(null, null);

    // Expect the result to be true, allowing access
    expect(result).toBeTrue();
  });

  it('should redirect to login if token is not present in localStorage', () => {
    // Simulate that no token exists in localStorage
    localStorageMock.getItem.and.returnValue(null);

    // Execute the guard's canActivate method
    const result = authGuard.canActivate(null, null);

    // Expect the result to be false, preventing access, and redirect to login
    expect(result).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
