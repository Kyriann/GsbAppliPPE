$.ajax({
    type: 'GET',
    url: 'http://localhost/testajax/praticien.php?departNOM='+departNOM,
    data: { 
        'departNOM': departNOM
    },
    success: function(result){
        $("#div1").html(result);

        var strlendepartNOM = departNOM.length;
        if (strlendepartNOM == '4'){
                var strdepartNOM = departNOM.substring(0,2);
                    strdepartNOM = strdepartNOM+"B";
        }else{
                var strdepartNOM = departNOM.substring(0,2);
        }

        $("#div2").html(strdepartNOM);
    }
});


