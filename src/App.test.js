import { getUser, getUpdatedUser } from "./sevices/fetch_services"
import { cleanup } from "@testing-library/react";
import '@testing-library/jest-dom'
 

afterEach(() => {
  cleanup();  
})

describe('Fetch User Data', () => {
  test('UserData', () => {
    const userFeild = getUser().then((e) => e.data.data)
    expect(userFeild == undefined).toBe(false)
  })
  test('UserUpdatedData', async () => {
    const userUpdatedFields = await getUpdatedUser().then((e) => e.data.data)
    const fieldLength = (Object.keys(userUpdatedFields.name)).length
    expect(fieldLength).toBeGreaterThan(0)
  })
})

 