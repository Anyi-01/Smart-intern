const BASE_URL = "http://localhost:5000"

export const getInternships = () => fetch(`${BASE_URL}/internships`).then(res => res.json())
export const getStudents = () => fetch(`${BASE_URL}/students`).then(res => res.json())
export const getCompanies = () => fetch(`${BASE_URL}/companies`).then(res => res.json())
export const getApplications = () => fetch(`${BASE_URL}/applications`).then(res => res.json())