class AuthAdapter {
  static signIn = (email: string, password: string) => {
    return `hello ${email} and ${password}`
  }
}

export default AuthAdapter
