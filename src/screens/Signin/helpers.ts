export function handleError(error: string): string {
  switch (error) {
    case 'auth/user-not-found':
    case 'auth/invalid-email':
    case 'auth/wrong-password':
      return 'The email and/or password is incorrect';
    case 'auth/email-already-in-use':
      return 'That email address is already in use!';
    case 'auth/weak-password':
      return 'The password is weak';
    default:
      console.log(error);
      return 'An unexpected error happened';
  }
}
