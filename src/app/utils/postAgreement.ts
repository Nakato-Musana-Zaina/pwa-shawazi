export const patchAgreement = async (id: string, data: FormData) => {
  try {
    const response = await fetch(`/api/agreements/?id=${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Failed to patch agreement. Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error: unknown) { 
    if (error instanceof Error) {
      console.error('Error patching agreement:', error.message); 
    } else {
      console.error('Unexpected error:', error); 
    }
    throw new Error('Failed to patch agreement');
  }
};
