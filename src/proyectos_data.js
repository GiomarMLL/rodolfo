// Logos de las empresas de los proyectos
import mvcs from './img/mvcs.jpg'
import ivc from './img/ivc.jpg'
import pnud from './img/pnud.jpg'
import oefa from './img/oefa.jpg'
import arsac from './img/arsac.jpg'
import cismid from './img/cismid.jpg'

// Proyectos de Rodolfo
import mvcs1 from './img/mvcs_obra.png'
import mvcs2 from './img/mvcs2.PNG'
import mvcs3 from './img/mvcs3.PNG'
import ivc_obra from './img/obra_ivc.png'
import pnud_obra from './img/pnud.png'
import oefa_obra from './img/oefa_obra.png'
import arsac_obra from './img/arsac_obra.png'
import cismid_obra from './img/cismid_obra.png'

const proyectos = [
  {
    logo: mvcs,
    empresa: 'MVCS',
    proyecto: [
      {
        fecha: 'Setiembre 2020 - Abril 2021',
        descripcion:[
         'Consultoría para el desarrollo del Sistema de Administración de Contratos para Programa Nacional de', 
         'Saneamiento Urbano del Ministerio de Vivienda, Saneamiento y Construcción.'
        ],
        img: mvcs2 
      },
      {
        fecha: 'Febrero 2020 - Abril 2020',
        descripcion:[
         'Servicio de la georreferenciación y vinculación del presupuesto con el GIS del Proyecto de "Creación de los Sistemas de Agua Potable dependientes del',
         'Reservorio N-31 y Alcantarillado Sanitario del distrito de Cerro Colorado, provincia de Arequipa, región de Arequipa" con CUI 2331087.',
         'Servicio de la georreferenciación y vinculación del presupuesto con el GIS del Proyecto de "Creación de los Sistemas de Agua Potable dependientes del',
         'Reservorio N-39 y Alcantarillado Sanitario del distrito de Cerro Colorado,provincia de Arequipa, región de Arequipa" con CUI 2331093.'
        ],
        img: mvcs3
      },
     
      {
        fecha: 'Noviembre 2019 - Diciembre 2019',
        descripcion:[
         'Servicio de levantamiento de procesos y requerimientos funcionales para digitalizar el seguimiento y control del proyecto de "ampliación,',
         'renovación y mejoramiento del sistema de agua potable y alcantarillado de la localidad de Caravelí"'
        ],
        img: mvcs1
      },
      {
        fecha: 'Agosto 2019 - Octubre 2019',
        descripcion:[
         'Servicio de georreferenciación y vinculación del presupuesto con el GIS del proyecto de "Ampliación, Renovación y Mejoramiento del',
         'sistema de agua potable y alcantarillado de la localidad de Caravelí".'
        ],
        img: null
      }
    ]
  },
  {
    logo: ivc,
    empresa: 'IVC',
    proyecto: [
      {
        fecha:'Octubre 2019 - Abril 2020',
        descripcion:[
          'Servicio de desarrollo de una aplicación para seguimiento y control de obras - Módulo de control de agregados.'
        ],
        img: ivc_obra
      }
    ]
  },
  {
    logo: pnud,
    empresa: 'PNUD',
    proyecto: [
      {
        fecha:'Agosto 2019 - Julio 2020',
        descripcion:[
         'Desarrollo e implementación de un geoportal orientado a web con información referida a áreas naturales protegidas, así como realizar el análisis y diseño para desarrollar e implementar',
         'plataformas espaciales referidas a commodities verdes y actividades diversas ejecutadas en campo por el proyecto paisajes productivos sostenibles pps.'
        ],
        img: pnud_obra
      }
    ]
  },
  {
    logo: oefa,
    empresa: 'OEFA',
    proyecto: [
       {
         fecha:'Agosto 2019 - Diciembre 2019',
         descripcion:[
           'Servicio para el mantenimiento y la implementación de mejoras en la interfaz de la aplicación de monitoreo ambiental de la OEFA. Servicio para la elaboración de aplicación SIG para la ',
           'determinación de indicadores de calidad de agua en el ámbito de la cuenca del río pucará alcance y descripción del servicio.'
         ],
         img: oefa_obra
       }
    ]
  },
  {
    logo: arsac,
    empresa: 'ARSAC',
    proyecto: [
       {
         fecha:'Junio 2015 - Agosto 2016',
         descripcion:[
           'Desarrollo e implementación de un ERP a medida, usando tecnologías .NET, web, móviles y GIS.'
         ],
         img: arsac_obra
       }
    ]
  },
  {
    logo: cismid,
    empresa: 'CISMID',
    proyecto: [
       {
         fecha:'Julio 2000 - Setiembre 2004',
         descripcion:[
           'Desarrollo de un sistema de gestión de exploraciones geotécnicas que permita visualizar y realizar análisis geotécnico en tiempo real.'
         ],
         img: cismid_obra
       }
    ]
  }
]
export default proyectos