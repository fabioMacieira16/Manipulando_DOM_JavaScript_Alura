const BotaoConclui = () => {
    const botaoconclui = document.createElement('button');

    botaoconclui.classList.add('check-button')
    botaoconclui.innerText = "concluir";
    botaoconclui.addEventListener('click', concluirTarefa)

    return botaoconclui
}

const concluirTarefa = (event) => {
    const botaoConclui = event.target

    const tarefaCompleta = botaoConclui.parentElement;

    tarefaCompleta.classList.toggle('done')
}

export default BotaoConclui;