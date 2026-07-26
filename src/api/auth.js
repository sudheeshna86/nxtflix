async function signIn(email, password) {
  const response = await fetch(
    'https://serverless-api-teal.vercel.app/api/auth/signin',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Login failed');
  }

  const token = data.data?.token || data.token || data.jwt_token || data.jwtToken;

  if (!token) {
    throw new Error('No token received from server');
  }

  return token;
}

export { signIn };
