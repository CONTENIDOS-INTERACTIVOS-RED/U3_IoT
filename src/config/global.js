export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Desarrollo de Aplicaciones y Análisis de Datos en IoT',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Desarrollo de aplicaciones y análisis de datos en IOT',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Herramientas para desarrollo IoT (Arduino, Raspberry Pi)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Uso de herramientas en la nube para IoT (AWS, Google Cloud)',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Integración de hardware y software',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Recolección de datos de sensores',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de sensores y su aplicación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Métodos de adquisición de datos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Recolección de datos en tiempo real',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Almacenamiento en la nube de datos IoT',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Procesamiento y análisis de datos IoT',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Domínguez Mínguez, T. (2020). Desarrollo de aplicaciones IoT en la nube para Arduino y ESP8266: (1 ed.). Marcombo.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/280029?page=1',
    },
    {
      referencia:
        'Domínguez Mínguez, T. (2021). Alexa. Desarrollo de aplicaciones IoT para Arduino y ESP8266: (1 ed.). Marcombo.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/280039?page=1',
    },
    {
      referencia:
        'Llaneza González, P. (2018). Seguridad y responsabilidad en la internet de las cosas (IoT): ( ed.). LA LEY Soluciones Legales S.A.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/58379?page=1',
    },
    {
      referencia:
        'Rosa, J. M. D. L. (2021). De la micro a la nanoelectrónica: impulsando la transformación digital: (1 ed.). Los libros de la Catarata.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/233414',
    },
    {
      referencia:
        'Ruiz-Velasco Sánchez, E. & Bárcenas López, J. (2025). Educatrónica tecnología de inteligencia artificial (robótica, programación e internet de las cosas): (1 ed.). Newton Edición y Tecnología Educativa.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/280532?page=1',
    },
    {
      referencia:
        'Domínguez Mínguez, T. (2021). Google Assistant: desarrollo de aplicaciones IoT para Arduino y ESP8266: (1 ed.). Marcombo.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/281469?page=1',
    },
  ],
  glosario: [
    {
      termino: 'Acelerómetro',
      significado:
        'sensor especializado que mide la aceleración de un objeto en uno o múltiples ejes espaciales, utilizado frecuentemente en aplicaciones IoT para detectar movimiento, vibración, inclinación y cambios de orientación en dispositivos móviles y sistemas de monitoreo estructural.',
    },
    {
      termino: 'Agregación temporal',
      significado:
        'técnica de procesamiento de datos que combina múltiples mediciones realizadas durante períodos específicos para generar valores estadísticos resumidos como promedios, máximos, mínimos y desviaciones estándar, facilitando el análisis de tendencias a largo plazo.',
    },
    {
      termino: 'API (Application Programming Interface)',
      significado:
        'conjunto de definiciones y protocolos que permite la comunicación entre diferentes aplicaciones de software, facilitando la integración de servicios IoT con plataformas en la nube y sistemas empresariales existentes.',
    },
    {
      termino: 'Arduino',
      significado:
        'plataforma de desarrollo de hardware abierto basada en microcontroladores que simplifica la creación de prototipos electrónicos, especialmente popular en proyectos IoT debido a su facilidad de uso y extenso ecosistema de componentes compatibles.',
    },
    {
      termino: 'AWS IoT Core',
      significado:
        'servicio de Amazon Web Services diseñado específicamente para conectar dispositivos IoT a la nube de manera segura, proporcionando capacidades de autenticación, comunicación bidireccional y integración con otros servicios de AWS.',
    },
    {
      termino: 'Big Data',
      significado:
        'conjuntos de datos extremadamente grandes y complejos que requieren herramientas especializadas para su almacenamiento, procesamiento y análisis, característicos de sistemas IoT que generan volúmenes masivos de información sensorial.',
    },
    {
      termino: 'Buffering',
      significado:
        'técnica de almacenamiento temporal de datos en memoria que permite manejar diferencias en velocidades de procesamiento entre diferentes componentes del sistema, crucial para mantener la integridad de datos en aplicaciones IoT.',
    },
    {
      termino: 'Canvas HTML5',
      significado:
        'elemento del estándar HTML5 que permite dibujar gráficos y visualizaciones dinámicas mediante JavaScript, utilizado para crear visualizaciones de alto rendimiento en aplicaciones web IoT.',
    },
    {
      termino: 'Clustering',
      significado:
        'técnica de análisis de datos que agrupa automáticamente elementos similares en conjuntos homogéneos, utilizada para identificar patrones en grandes volúmenes de datos IoT y simplificar visualizaciones complejas.',
    },
    {
      termino: 'Dashboard',
      significado:
        'interfaz visual que presenta información clave de manera organizada y comprensible, permitiendo a los usuarios monitorear métricas importantes y tomar decisiones basadas en datos en tiempo real.',
    },
    {
      termino: 'Data Lake',
      significado:
        'repositorio de almacenamiento que puede contener datos estructurados y no estructurados a escala masiva, utilizado en arquitecturas IoT para almacenar información de múltiples fuentes antes de su procesamiento y análisis.',
    },
    {
      termino: 'DHT22',
      significado:
        'sensor digital de temperatura y humedad relativa ampliamente utilizado en proyectos IoT debido a su precisión aceptable, facilidad de integración y costo accesible para aplicaciones de monitoreo ambiental.',
    },
    {
      termino: 'Drill-down',
      significado:
        'capacidad de navegación en interfaces de análisis que permite explorar información desde vistas generales hacia detalles específicos, manteniendo el contexto y facilitando la investigación profunda de datos IoT.',
    },
    {
      termino: 'Edge Computing',
      significado:
        'paradigma de computación que procesa datos cerca de su origen en lugar de enviarlos a centros de datos centralizados, reduciendo latencia y mejorando la respuesta en tiempo real de sistemas IoT.',
    },
    {
      termino: 'ESP8266',
      significado:
        'microcontrolador de bajo costo con capacidades Wi-Fi integradas, muy popular en proyectos IoT para conectar sensores y actuadores a redes inalámbricas y servicios en la nube.',
    },
    {
      termino: 'Fritzing',
      significado:
        'herramienta de software para diseño de prototipos electrónicos que permite crear diagramas esquemáticos, diseños de protoboard y documentación técnica de proyectos de hardware de manera intuitiva.',
    },
    {
      termino: 'Google Cloud IoT',
      significado:
        'plataforma de servicios de Google Cloud diseñada para conectar, gestionar y analizar datos de dispositivos IoT, ofreciendo capacidades de machine learning y análisis avanzado integradas.',
    },
    {
      termino: 'Grafana',
      significado:
        'plataforma de visualización y análisis de código abierto especializada en métricas de series temporales, ampliamente utilizada para crear dashboards interactivos que muestren datos de sistemas IoT en tiempo real.',
    },
    {
      termino: 'Heat Map',
      significado:
        'tipo de visualización que utiliza colores para representar la intensidad de valores en una matriz bidimensional, efectiva para mostrar patrones geográficos o temporales en datos IoT de manera intuitiva.',
    },
    {
      termino: 'I2C (Inter-Integrated Circuit)',
      significado:
        'protocolo de comunicación serie que permite conectar múltiples dispositivos en un bus compartido utilizando únicamente dos cables, comúnmente utilizado para conectar sensores a microcontroladores en proyectos IoT.',
    },
    {
      termino: 'InfluxDB',
      significado:
        'base de datos especializada en series temporales optimizada para almacenar y consultar datos con timestamps, ideal para aplicaciones IoT que generan mediciones continuas de sensores.',
    },
    {
      termino: 'IoT (Internet of Things)',
      significado:
        'paradigma tecnológico que conecta objetos físicos del mundo real a internet, permitiendo que recopilen, intercambien y actúen sobre datos de manera autónoma o controlada remotamente.',
    },
    {
      termino: 'JSON (JavaScript Object Notation)',
      significado:
        'formato ligero de intercambio de datos que utiliza sintaxis legible para representar estructuras de datos, ampliamente utilizado en comunicaciones IoT por su simplicidad y compatibilidad universal.',
    },
    {
      termino: 'Lazy Loading',
      significado:
        'técnica de optimización que retrasa la carga de contenido hasta que sea realmente necesario, utilizada en aplicaciones IoT para mejorar el rendimiento y reducir el consumo de recursos.',
    },
    {
      termino: 'Machine Learning',
      significado:
        'un campo de la inteligencia artificial que permite a los sistemas aprender y mejorar automáticamente a partir de datos sin programación explícita, aplicado en IoT para análisis predictivo y detección de anomalías.',
    },
    {
      termino: 'MQTT (Message Queuing Telemetry Transport)',
      significado:
        'protocolo de mensajería ligero diseñado para comunicaciones machine-to-machine en entornos con ancho de banda limitado, estándar de facto para comunicaciones IoT.',
    },
    {
      termino: 'Node.js',
      significado:
        'entorno de ejecución de JavaScript del lado del servidor que permite crear aplicaciones escalables y eficientes, frecuentemente utilizado para desarrollar backends de aplicaciones IoT.',
    },
    {
      termino: 'Oversampling',
      significado:
        'técnica que consiste en muestrear señales a frecuencias superiores a la mínima requerida para mejorar la resolución y reducir ruido, utilizada en sistemas de adquisición de datos IoT de alta precisión.',
    },
    {
      termino: 'PCB (Printed Circuit Board)',
      significado:
        'placa de circuito impreso que conecta electrónicamente componentes mediante pistas conductoras, utilizada para crear versiones de producción de prototipos IoT desarrollados inicialmente en protoboards.',
    },
    {
      termino: 'Power BI',
      significado:
        'plataforma de análisis de negocio de Microsoft que permite crear visualizaciones interactivas y reportes a partir de múltiples fuentes de datos, incluyendo sistemas IoT empresariales.',
    },
    {
      termino: 'Progressive Web App',
      significado:
        'aplicación web que utiliza tecnologías modernas para proporcionar experiencias similares a aplicaciones nativas, incluyendo capacidades offline útiles para aplicaciones IoT móviles.',
    },
    {
      termino: 'QoS (Quality of Service)',
      significado:
        'conjunto de técnicas para gestionar y garantizar el rendimiento de comunicaciones en redes, crucial en sistemas IoT para asegurar entrega confiable de datos críticos.',
    },
    {
      termino: 'Raspberry Pi',
      significado:
        'computadora de placa única de bajo costo que ejecuta sistemas operativos completos, utilizada como gateway IoT y para procesamiento edge computing en aplicaciones que requieren mayor capacidad computacional.',
    },
    {
      termino: 'Real-time',
      significado:
        'característica de sistemas que procesan y responden a eventos dentro de límites temporales estrictos, fundamental en aplicaciones IoT críticas como control industrial y sistemas de seguridad.',
    },
    {
      termino: 'REST (Representational State Transfer)',
      significado:
        'estilo arquitectónico para servicios web que utiliza métodos HTTP estándar, ampliamente adoptado en APIs IoT por su simplicidad y escalabilidad.',
    },
    {
      termino: 'Sampling',
      significado:
        'proceso de obtener muestras discretas de señales continuas a intervalos regulares, fundamental en sistemas de adquisición de datos IoT para convertir fenómenos físicos en datos digitales.',
    },
    {
      termino: 'SDK (Software Development Kit)',
      significado:
        'conjunto de herramientas de desarrollo que incluye bibliotecas, documentación y ejemplos para facilitar la creación de aplicaciones para plataformas específicas, disponible para la mayoría de servicios IoT en la nube.',
    },
    {
      termino: 'Sensor',
      significado:
        'dispositivo que detecta y mide magnitudes físicas del entorno convirtiéndolas en señales eléctricas procesables, componente fundamental de cualquier sistema IoT que interactúe con el mundo físico.',
    },
    {
      termino: 'Series temporales',
      significado:
        'secuencia de puntos de datos indexados en orden temporal, tipo de dato característico en sistemas IoT que registran mediciones de sensores a lo largo del tiempo.',
    },
    {
      termino: 'Streaming',
      significado:
        'método de transmisión y procesamiento de datos de manera continua y en tiempo real, utilizado en sistemas IoT para manejar flujos constantes de información sensorial.',
    },
    {
      termino: 'Throttling',
      significado:
        'técnica de control que limita la frecuencia de operaciones para evitar sobrecarga del sistema, utilizada en aplicaciones IoT para gestionar el consumo de recursos y mantener rendimiento estable.',
    },
    {
      termino: 'Timestamp',
      significado:
        'marca temporal que indica el momento exacto en que ocurrió un evento o se registró un dato, esencial para correlacionar información de múltiples sensores en sistemas IoT.',
    },
    {
      termino: 'WebSocket',
      significado:
        'protocolo de comunicación que proporciona canales de comunicación bidireccional sobre una conexión TCP, utilizado para actualizaciones en tiempo real en aplicaciones web IoT.',
    },
  ],
}
