// exemplo

function login(email, senha){
    if(email ==="email@gmail.com" && senha === "família"){
        return "status 200 (ok)"
    }else{
        return "Status 400 (error)"
    }

}
const email = prompt();
const senha = prompt();

const response = login(email, senha);

console.log(response); 


// Email | Senha | Confirmar senha Data de nascimento | Número de Telefone

function registro(email, senha, confirmarSenha, data, telefone){
        if(email === "" || senha === "" || confirmarSenha === "" || data === "" || telefone === ""){
            return "Status 400 (Todos os campos são necessário)"
        }else{
            if(senha != confirmarSenha){
                return "status 400 ( As senhas devem ser iguais)" 
            }else{ 
                return "Status 200 (ok)" 
            }
        }
}

const res = registro("aron", "tara", "safas", "", "5874750147504");
console.log(res);
