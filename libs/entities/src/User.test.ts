import { userSchema } from "."

describe("user entity", () => {

  it('should have email and id', async () => {
    const testData = { id: 'n1g9O3Rxw5', email: 'test@mail.com' }
    expect(await userSchema.isValid(testData)).toBe(true)
  })

})
