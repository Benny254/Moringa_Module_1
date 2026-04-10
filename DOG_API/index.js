URL = 'https://dogapi.dog/api/v2/breeds';

document.addEventListener('DOMContentLoaded', async() => {
    try { 
        const response = await fetch(URL);
        
        if (!response.ok) {
            console.error('Error fetching data:', response.status);
            return;
        }

        const data = await response.json();
        console.log('Breed data:', data);
    } catch (error)
    {
        console.error('Error fetching data:', error);
    }
});
        