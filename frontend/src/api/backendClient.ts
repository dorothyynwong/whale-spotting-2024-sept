export interface User {
  userName: string
  firstName?: string
  lastName?: string
  email: string
  totalPointsEarned: number
  aboutMe?: string
}

export interface Sightings {
  sightings: Array<Sighting>
}

export interface Sighting {
  id: number
  userId: number
  speciesId: number
  latitude: number
  longitude: number
  photoUrl: string
  description: string
  dateTime: string
}

export const loginUser = async (username: string, password: string) => {
  return await fetch(`http://localhost:5280/auth/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
}

export const registerUser = async (
  firstname: string,
  lastname: string,
  email: string,
  username: string,
  password: string,
  aboutme: string,
) => {
  return await fetch(`http://localhost:5280/auth/register`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstname,
      lastname,
      email,
      username,
      password,
      aboutme,
    }),
  })
}

export async function fetchUserProfile(header: string): Promise<User> {
  const response = await fetch(`http://localhost:5280/users/profile`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${header}`,
    },
  })
  return await response.json()
}

export async function fetchUnapprovedSightings(header: string): Promise<Sightings> {
  const response = await fetch(`http://localhost:5280/sightings/unapproved`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${header}`,
    },
  })
  return await response.json()
}

export async function approveSighting(header: string, sightingId: number) {
  const response = await fetch(`http://localhost:5280/admin/approve/sighting=${sightingId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${header}`,
    },
    method: "PUT",
  })
  return await response
}

// to add the JWT token as a header to fetch requests which access protected endpoints do the following:
// In the .tsx file where the fetch request is being called:
// 1) import the login context to access the value of the JWT token
// 2) pass the token as a prop called 'header' in the method which calls the fetch request
// In this file:
// 1) add 'header: string' as a prop to the method
// 2) add "Authorization": `Bearer ${header}` to the list of headers
