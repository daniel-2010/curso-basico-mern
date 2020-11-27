export const getNomeTipo = (value) => {
    // Solução 1
    // let nome_tipo = '';
    // if(value==1){
    //     nome_tipo = 'Administrador';
    // }else if(value==2){
    //     nome_tipo = 'Gerente';
    // }else if(value==3){
    //     nome_tipo = 'Funcionário';
    // }
    // return nome_tipo;

    // SOLUÇÃO 2
    // if(value==1){
    //     return 'Administrador';
    // }else if(value==2){
    //     return 'Gerente';
    // }else if(value==3){
    //     return 'Funcionário';
    // }
    // return '';

    //SOLUÇÃO 3
    var arr = ['Administrador','Gerente','Funcionário'];
    return arr[value-1];
};
export const getNomeTipoLabel = (value) => {
    //SOLUÇÃO 3
    var arr = ['primary','default','secondary'];
    return arr[value-1];
};