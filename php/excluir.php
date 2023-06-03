<?php  

include("conexao.php");

$obterDados = file_get_contents("php://input");

$extrair = json_decode($obterDados);

$idCurso = $extrair->cursos->idCurso;

$sql = "delete from cursos where idCurso=$idCurso";
mysqli_query($conexao, $sql);

?>