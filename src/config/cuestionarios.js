export default {
  tema2: {
    tema: '2. Recolección de datos de sensores',
    titulo: 'Ponte a prueba',
    introduccion:
      'Demuestra lo que aprendiste sobre desarrollo de aplicaciones IoT, recolección de datos y análisis de sensores.',
    barajarPreguntas: true,
    preguntas: [
      {
        id: 1,
        texto:
          '¿Cuál es una placa de hardware popular para prototipos IoT?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Arduino',
            esCorrecta: true,
          },
          {
            id: 'b',
            texto: 'Excel',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Pendrive',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Teclado',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Arduino es una placa de hardware muy popular para prototipos IoT.',
        mensaje_incorrecto:
          'Incorrecto. Arduino es una placa de hardware muy popular para prototipos IoT.',
      },
      {
        id: 2,
        texto:
          '¿Cuál de las siguientes tareas realiza una Raspberry Pi en un sistema IoT?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Enviar memes',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Mostrar animaciones en PowerPoint',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Ejecutar código para recoger y procesar datos',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Imprimir boletines escolares',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Raspberry Pi ejecuta código para recoger y procesar datos en sistemas IoT.',
        mensaje_incorrecto:
          'Incorrecto. Raspberry Pi ejecuta código para recoger y procesar datos en sistemas IoT.',
      },
      {
        id: 3,
        texto:
          '¿Qué herramienta se puede usar para visualizar datos recolectados por sensores IoT?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Paint',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Node-RED',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Word',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Notepad',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Node-RED es una herramienta para visualizar datos recolectados por sensores IoT.',
        mensaje_incorrecto:
          'Incorrecto. Node-RED es una herramienta para visualizar datos recolectados por sensores IoT.',
      },
      {
        id: 4,
        texto:
          'La recolección de datos en IoT se basa principalmente en:',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Cámaras digitales',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Sensores conectados',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Antenas parabólicas',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Routers WiFi',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! La recolección de datos en IoT se basa principalmente en sensores conectados.',
        mensaje_incorrecto:
          'Incorrecto. La recolección de datos en IoT se basa principalmente en sensores conectados.',
      },
      {
        id: 5,
        texto:
          '¿Cuál es un beneficio del análisis de datos en proyectos IoT?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Aumenta el tamaño del archivo',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Mejora las decisiones basadas en los datos obtenidos',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Reduce la memoria disponible',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Disminuye la velocidad de internet',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! El análisis de datos mejora las decisiones basadas en los datos obtenidos.',
        mensaje_incorrecto:
          'Incorrecto. El análisis de datos mejora las decisiones basadas en los datos obtenidos.',
      },
    ],
  },
  tema3: {
    tema: '3. Riesgos de seguridad en IoT',
    titulo: 'Ponte a prueba',
    introduccion:
      'Demuestra lo que aprendiste sobre protocolos IoT y seguridad.',
    barajarPreguntas: true,
    preguntas: [
      {
        id: 1,
        texto:
          '¿Qué protocolo ligero es muy utilizado en IoT para la comunicación máquina a máquina?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'FTP',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'MQTT',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'SMTP',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'HTTP',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! MQTT es el protocolo ligero más utilizado en IoT para comunicación máquina a máquina.',
        mensaje_incorrecto:
          'Incorrecto. MQTT es el protocolo ligero más utilizado en IoT para comunicación máquina a máquina.',
      },
      {
        id: 2,
        texto:
          '¿Cuál es una ventaja del protocolo CoAP en redes IoT?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Consume mucho ancho de banda',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Se basa en HTTP',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Opera sobre UDP, ideal para dispositivos con pocos recursos',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Requiere conexión continua',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! CoAP opera sobre UDP y es ideal para dispositivos con recursos limitados.',
        mensaje_incorrecto:
          'Incorrecto. CoAP opera sobre UDP y es ideal para dispositivos con recursos limitados.',
      },
      {
        id: 3,
        texto:
          'Una amenaza común a la seguridad en IoT es:',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'El uso de software educativo',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Actualizaciones frecuentes',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'El acceso no autorizado a dispositivos',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'El bajo voltaje',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! El acceso no autorizado a dispositivos es una amenaza común en IoT.',
        mensaje_incorrecto:
          'Incorrecto. El acceso no autorizado a dispositivos es una amenaza común en IoT.',
      },
      {
        id: 4,
        texto: '¿Qué técnica se usa para proteger los datos transmitidos en IoT?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Fragmentación IP',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Encriptación de extremo a extremo',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Compresión ZIP',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Streaming',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! La encriptación de extremo a extremo protege los datos transmitidos en IoT.',
        mensaje_incorrecto:
          'Incorrecto. La encriptación de extremo a extremo protege los datos transmitidos en IoT.',
      },
      {
        id: 5,
        texto:
          '¿Por qué los dispositivos IoT suelen ser vulnerables?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Porque no tienen sensores',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Porque son difíciles de usar',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Porque a menudo carecen de medidas de seguridad robustas',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Porque son caros',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Los dispositivos IoT suelen carecer de medidas de seguridad robustas.',
        mensaje_incorrecto:
          'Incorrecto. Los dispositivos IoT suelen carecer de medidas de seguridad robustas.',
      },
    ],
  },
  tema4: {
    tema: '4. Integración de pruebas automatizadas en pipelines CI/CD',
    titulo: 'Ponte a prueba',
    introduccion:
      'Demuestra lo que aprendiste sobre automatización de pruebas e integración en pipelines CI/CD.',
    barajarPreguntas: true,
    preguntas: [
      {
        id: 1,
        texto:
          '¿Cuál es el principal beneficio de automatizar pruebas de software?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Reducir la cantidad de desarrolladores',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Eliminar la necesidad de pruebas manuales',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Mejorar la eficiencia y detectar errores de forma temprana',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Aumentar el tiempo de desarrollo',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! La automatización mejora la eficiencia y permite detectar errores tempranamente.',
        mensaje_incorrecto:
          'Incorrecto. La automatización mejora la eficiencia y detecta errores de forma temprana.',
      },
      {
        id: 2,
        texto:
          '¿Qué herramienta es comúnmente utilizada para pruebas unitarias en aplicaciones Java?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Selenium',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'JUnit',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Postman',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'TestNG',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! JUnit es el framework más utilizado para pruebas unitarias en Java.',
        mensaje_incorrecto:
          'Incorrecto. JUnit es la herramienta más común para pruebas unitarias en Java.',
      },
      {
        id: 3,
        texto:
          '¿Cuál de las siguientes herramientas permite la automatización de pruebas en la interfaz gráfica de una aplicación web?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Git',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Selenium',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'JUnit',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Maven',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Selenium es la herramienta principal para automatizar pruebas de interfaz web.',
        mensaje_incorrecto:
          'Incorrecto. Selenium es la herramienta para automatizar pruebas de interfaz web.',
      },
      {
        id: 4,
        texto:
          'En un pipeline CI/CD, ¿qué etapa permite validar automáticamente que los cambios en el código no introducen errores?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Ejecución de pruebas automatizadas',
            esCorrecta: true,
          },
          {
            id: 'b',
            texto: 'Revisión de código manual',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Publicación de documentación',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Registro del commit',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Las pruebas automatizadas validan que los cambios no introduzcan errores.',
        mensaje_incorrecto:
          'Incorrecto. Las pruebas automatizadas son las que validan automáticamente los cambios.',
      },
      {
        id: 5,
        texto:
          '¿Cuál es la función principal del archivo Jenkinsfile en un proyecto de automatización?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Configurar las reglas de negocio del sistema',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Definir el flujo de trabajo del pipeline CI/CD',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Gestionar los permisos de los usuarios',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Ejecutar manualmente los scripts de prueba',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Jenkinsfile define el flujo de trabajo del pipeline CI/CD.',
        mensaje_incorrecto:
          'Incorrecto. Jenkinsfile define el flujo de trabajo del pipeline CI/CD.',
      },
    ],
  },
  tema5: {
    tema: '5. Automatización de pruebas de software',
    titulo: 'Ponte a prueba',
    introduccion:
      'Demuestra lo que aprendiste sobre automatización de pruebas de software y herramientas CI/CD.',
    barajarPreguntas: true,
    preguntas: [
      {
        id: 1,
        texto:
          '¿Cuál es el principal beneficio de automatizar pruebas de software?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Reducir la cantidad de desarrolladores',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Eliminar la necesidad de pruebas manuales',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Mejorar la eficiencia y detectar errores de forma temprana',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Aumentar el tiempo de desarrollo',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! La automatización mejora la eficiencia y permite detectar errores tempranamente.',
        mensaje_incorrecto:
          'Incorrecto. La automatización mejora la eficiencia y detecta errores de forma temprana.',
      },
      {
        id: 2,
        texto:
          '¿Qué herramienta es comúnmente utilizada para pruebas unitarias en aplicaciones Java?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Selenium',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'JUnit',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Postman',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'TestNG',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! JUnit es el framework más utilizado para pruebas unitarias en Java.',
        mensaje_incorrecto:
          'Incorrecto. JUnit es la herramienta más común para pruebas unitarias en Java.',
      },
      {
        id: 3,
        texto:
          '¿Cuál de las siguientes herramientas permite la automatización de pruebas en la interfaz gráfica de una aplicación web?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Git',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Selenium',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'JUnit',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Maven',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Selenium es la herramienta principal para automatizar pruebas de interfaz web.',
        mensaje_incorrecto:
          'Incorrecto. Selenium es la herramienta para automatizar pruebas de interfaz web.',
      },
      {
        id: 4,
        texto:
          'En un pipeline CI/CD, ¿qué etapa permite validar automáticamente que los cambios en el código no introducen errores?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Ejecución de pruebas automatizadas',
            esCorrecta: true,
          },
          {
            id: 'b',
            texto: 'Revisión de código manual',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Publicación de documentación',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Registro del commit',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Las pruebas automatizadas validan que los cambios no introduzcan errores.',
        mensaje_incorrecto:
          'Incorrecto. Las pruebas automatizadas son las que validan automáticamente los cambios.',
      },
      {
        id: 5,
        texto:
          '¿Cuál es la función principal del archivo Jenkinsfile en un proyecto de automatización?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Configurar las reglas de negocio del sistema',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Definir el flujo de trabajo del pipeline CI/CD',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Gestionar los permisos de los usuarios',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Ejecutar manualmente los scripts de prueba',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Jenkinsfile define el flujo de trabajo del pipeline CI/CD.',
        mensaje_incorrecto:
          'Incorrecto. Jenkinsfile define el flujo de trabajo del pipeline CI/CD.',
      },
    ],
  },
}
