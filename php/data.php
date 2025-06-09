<?php

$success = "ok.html";
$error = "err.html";

if($_POST){
    $array = $_POST;
}else if($_GET){
    $array = $_GET;
}else{
    die('SHOULD ACCESS THIS FILE THROUGH A FROM');
}

if(!$array('filename')){
    $array('filename') = "form.xls"; ///CREAR EL ARCHIVO EXCEL
else{
    if(!(stristr($array('filename'),"xls"))){
        $array('filename') = $array('filename').".xls";  /// SI EXISTE NO LO CREA
    }
}}
//DEF CARACTERES DE RETORN
$tab = "\t";
$cr = "\n";

if($array){
    $keys = array_keys($array);
    foreach($keys as $key){
        if(strtolower($key) != 'filename' && strtolower($key) != 'title'){
            $header 
        }
    }
}
?>