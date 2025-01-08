


// Instagram parallax
$('.parallax-portada').parallax({
  imageSrc: "../../../agendalafecha.com/demoxv/assets/img/fondo.png"
});

// Portada parallax
$('.parallax-portada').parallax({
  imageSrc: "../../../agendalafecha.com/demoxv/assets/img/fondo.png"
});

// ----------------------



// Cuenta regresiva
var fechaCuentaRegresiva = "2025-02-01T20:00:00";
var fechaInicio = new Date().getTime();
var fechaFin = new Date(fechaCuentaRegresiva).getTime();
var diff = (fechaFin - fechaInicio) / 1000;



// Config countdown
$('.countdown').ClassyCountdown({

  theme: "black",

  labelsOptions: {
    style: 'font-size: 15px;font-family: \'Montserrat\', sans-serif;'
  },

  style: {
    // textResponsive: 0.6,
    secondsElement: {
      gauge: {
        fgColor: "#F00"
      }
    },

    days: {
      gauge: {
        thickness: 0.01,
        fgColor: colorCirculosCuentaRegresiva
      },
      textCSS: 'color:' + colorTextoCuentaRegresiva + ';font-size: 30px !important;font-family: \'Montserrat\', sans-serif;'
    },


    hours: {
      gauge: {
        thickness: 0.01,
        fgColor: colorCirculosCuentaRegresiva
      },
      textCSS: 'color:' + colorTextoCuentaRegresiva + ';font-size: 30px !important;font-family: \'Montserrat\', sans-serif;'
    },


    minutes: {
      gauge: {
        thickness: 0.01,
        fgColor: colorCirculosCuentaRegresiva
      },
      textCSS: 'color:' + colorTextoCuentaRegresiva + ';font-size: 30px !important;font-family: \'Montserrat\', sans-serif;'
    },


    seconds: {
      gauge: {
        thickness: 0.01,
        fgColor: colorCirculosCuentaRegresiva
      },
      textCSS: 'color:' + colorTextoCuentaRegresiva + ';font-size: 30px !important;font-family: \'Montserrat\', sans-serif;'
    }


  },

  // Fecha finalizacion
  end: $.now() + diff,

  // Al finalizar
  onEndCallback: function () {
    // $('.cuenta-regresiva').hide();
  }

});