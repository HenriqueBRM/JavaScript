// variavel para armazenar o form

const storageForm = document.getElementById('form-tarefa')

// variavel para armazenar o titulo da tarefa (input)

const storageTitle = document.querySelector('#titulo')

// variavel para armazenar o filtro de status

const storageStatsFilter = document.querySelector('#filtro-status')

// variavel para armazenar o filtro de busca

const storageSearchFilter = document.querySelector('#filtro-busca')

//variavel para armazenar a lista

const storageList = document.querySelector('#lista-tarefas')

//variavel para armazenar o texto que aparece quando a tela esta vazia 

const storageVoid = document.querySelector('#vazio')

let tasks = [

    {id: 1, titulo: "Estudar DOM", status: "pendente"},
    {id: 2, titulo: "Criar a To-Do-List", status: "andamento"},
    {id: 3, titulo: "Praticar JavaScript", status: "concluida"}

]

//Adiciona um "ouvinte" para o evento de submit do formulario

storageForm.addEventListener('submit', function(e){
    //letra e na funcao: eh uma referencia ao objeto de evento que o navegador cria sempre que algo acontece
    //impede o comportamento padrao do formulario(recarregar a pagina)
    e.preventDefault();

    const title = storageTitle.value.trim()
    //recebe o valor digitado no titulo removendo os espacos
    
    if (!title) return;
    console.log("Titulo inserido pelo usuario: " , title)
    console.log(storageTitle)

    const New = {id: Date.now(), titulo: title, status: "pendente"}
    //cria um objeto representando a nova tarefa
    // - id: recebe o numero do timestemp(date.now() )
    // - title: recebe o texto digitado pelo usuario
    // - status: comeca como pendente

    tasks.push(New)
    // adiciona a nova tarefa ao array de tarefas

    storageTitle.value = ""

    render();
    //chama a funcao render para atualizar a lista de tarefas exibida na tela
})

//renderizar a lista

function render(){
    const term = storageSearchFilter.value.toLowerCase()
    //termo digitado na busca - deixar minusculo

    const filter = storageStatsFilter.value;
    //valor selecionado no filtro de status

    const alreadyFilter = tasks.filter(function(tarefa){
    //aplica filtros de status e busca

        
        const okStatus = filter === "todas" ? true : tarefa.status === filter;
        // se filtro for "todas", aceita qualquer status
        // senao - compara com todos os status
        

        const okSearch = term ? tarefa.titulo.toLowerCase().includes(term): true
        //se houver um termo, verifica se titulo contem esse termo
        //se usuario digitar algo, so aceita a tarefa se for igual ao que o usuario digitou
        //se o usuario nao digitar nada - retorna a lista completa
        
        return okSearch && okStatus
        
    })


    storageList.innerHTML = "";
    //limpar a lista antes de redesenhar

    alreadyFilter.forEach(function(t){
        //cria os elementos da lista para cada tarefa filtrada
        //<li class "tarefa {status}" data-id={id}><\li>
        const li = document.createElement('li')
        //class="tarefa concluida"        
        li.className = "tarefa " + t.status
        li.dataset.id = t.id; 
        
        const h3 = document.createElement('h3')
        //titulo da tarefa
        //<h3> Aula JavaScript <\h3>

        h3.textContent = t.titulo

        const actions = document.createElement('div')
        actions.className = "acao";
        //caixinha de acoes(checkbox,select, botao remover)

        const check = document.createElement('input')
        check.type = "checkbox"
        check.checked = t.status === "concluida"


        check.addEventListener('change', function(){
        // ao mudar o check, redesenha na tela
        
            t.status= check.checked ? "concluida" : "pendente"
            render()
        })
        //essa funcao reescreve o status da atividade se o checkbox for clicado

        const select = document.createElement('select')
        //selecao de status :pendente/concluida/em andamento
        const selectList = ["pendente", "andamento", "concluida"]

        selectList.forEach(function(status){
            const option = document.createElement('option')
            option.value = status

            option.textContent = status.charAt(0).toUpperCase() + status.slice(1)
            //formata o texto(deixando a primeira letra maiuscula)

            if (t.status === status) option.selected = true;
            select.appendChild(option)
                
        
        })
        

        select.addEventListener('change', function(){
            t.status = select.value
            render()
        })

        //botao remover
        const botao = document.createElement('button')
        botao.textContent = 'X'
        botao.className = "remover"

        botao.addEventListener('click', function() {
            tarefas = tarefas.filter(apagar => apagar.id !== t.id)
            render();
        })
        //recebe o evento de click e filtra uma nova lista

        actions.appendChild(check)
        actions.appendChild(select)
        actions.appendChild(botao)

        //adicionando os filhos da div actions
        li.appendChild(h3)
        li.appendChild(actions)

        //adicionando os filhos do ul (#lista-tarefa)
        storageList.appendChild(li)
        
    })

    storageVoid.style.display = alreadyFilter.length ? "none":"block"
    //texto aparece apenas se o array de filtradas existir algo caso contrario, recebe display : none(some da tela)


    storageStatsFilter.addEventListener('change',render)
    storageStatsFilter.addEventListener('input',render)

}
    render()

    