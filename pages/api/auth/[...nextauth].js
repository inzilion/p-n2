import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: '766e2fffff603dc7de7e',
      clientSecret: 'd2e9a13d40a90058283edb119a03e493cb99279c',
    }),
    // ...add more providers here
  ],
  secret: 'qwer1234'
}

export default NextAuth(authOptions)