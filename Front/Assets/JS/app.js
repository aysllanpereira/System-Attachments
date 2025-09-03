

document.getElementById('form').addEventListener('submit', async (e) => {

    e.preventDefault();

    const formData = new FormData(e.target);
    // console.log(formData);

    // const dataForm = {
    //     nome: formData.get('nome'),
    //     cpf: formData.get('cpf'),
    //     endereco: formData.get('address'),
    //     turno: formData.get('turno'),
    //     curso: formData.get('curso'),
    //     numeroTurma: formData.get('numeroTurma'),
    //     file: formData.get('file')
    // }
    // console.log(dataForm);

    // if(!dataForm) return alert("Preencha todos os campos!");

    // const fileData = ;
    // console.log(fileData);

    try {
        const res = await fetch('http://localhost:3000/', {
            method: 'POST',
            body: formData
        });

        const ok = await res.json();
        console.log(`Dados enviados! ${ok}`);
    } catch (error) {
        console.error(`Deu ruim! ${error}`);
    }
});