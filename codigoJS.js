$("#btnColumnas").click(function(){
    columnas();
});
$("#btnLineas").click(function(){
    lineas();
});

function lineas(){
Highcharts.chart('contenedor',{  
    chart:{
            type:'line'
    },
    title:{
        text:'Records en segundos entre 1983 al 2015 de las Mujeres en distintas disciplinas'
    },
    xAxis:{
        categories:['28-Jul-83','6-Oct-85','20-Aug-88','16-Jul-88','29-Sep-88','1-Oct-88','8-Sep-93','13-Apr-03','8-Au-03','17-Aug-08','6-Jun-08','10-Aug-12','6-Jun-15','17-Jul-15']
    },
    yAxis:{
        title:{
            text:'Segundos'
        }
    },
    legend:{
        layout:'vertical',
        align: 'right',
        verticalAlign:'middle'
    },
    series:[{
        name:'Mujeres',
        data:[103.28,47.60,12.21,10.49,21.34,195.17,1771.78,8100.25,52.34,538.81,851.15,40.82,5040.38,230.07]
    }],    
    
})}
function columnas(){
    Highcharts.chart('contenedor',{  
        chart:{
                type:'line'
        },
        title:{
            text:'Records en segundos entre 1983 al 2015 de los Hombres en distintas disciplinas'
        },
        xAxis:{
            categories:['6-Aug-92','22-Aug-93','14-Jul-98','26-Aug-99','3-Sep-04','31-May-04','26-Aug-05','16-Aug-09','20-Aug-09','11-Aug-12','9-Aug-12','7-Sep-12','28-Sep-14','15-Aug-14','15-Mar-15']
        },
        yAxis:{
            title:{
                text:'Segundos'
            }
        },
        legend:{
            layout:'vertical',
            align: 'right',
            verticalAlign:'middle'
        },
        series:[{
            name:'Hombres',
            data:[46.78,174.29,206.00,43.18,473.63,757.35,1577.53,9.58,19.19,36.84,19.91,12.80,7320.57,12720.33,4560.36]
        }],    
        
    })}