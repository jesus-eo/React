
export async function post(url, body) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body),
        });
        if (response.ok) {
            return await response.json()
        } else {
            alert("Error en la respuesta")
        }
    } catch (error) {
        alert(error.message);
    }
}

export async function get(url) {
    try {
         const response = await fetch(url)
            
            if (response.ok) {
                const responseJson = await response.json();
                return responseJson               
            } else {
                alert("El pokemos seleccionado no existe")
            };
    } catch (error) {
        alert(error.message);
    }
}